import { useFrame } from '@react-three/fiber'
import { useCallback, useEffect, useMemo } from 'react'
import { useCubeTexture, useTexture } from '@react-three/drei'

import * as THREE from 'three'
import { gsap } from 'gsap'
import { vertUniforms, vertMain } from './vert'
import { fragUniforms, fragCommon, fragMain } from './frag'

let dat = null
if (typeof window !== `undefined`) {
  dat = require('dat.gui')
}

const Blob = () => {
  const customUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uBigWavesElevation: { value: 0.25 },
      uBigWavesFrequencyX: { value: 4.0 },
      uBigWavesFrequencyY: { value: 1.0 },
      uBigWavesSpeed: { value: 1.5 },
      uSmallWavesElevation: { value: 0.0 },
      uSmallWavesFrequency: { value: 1.0 },
      uSmallWavesSpeed: { value: 1.5 },
    }),
    []
  )

  // Add data.gui
  useEffect(() => {
    const gui = new dat.GUI()
    gui.hide()
    const addGUI = () => {
      gui
        .add(customUniforms.uBigWavesElevation, 'value')
        .min(0)
        .max(1)
        .step(0.001)
        .name('uBigWavesElevation')
      gui
        .add(customUniforms.uBigWavesFrequencyX, 'value')
        .min(0)
        .max(10)
        .step(0.001)
        .name('uBigWavesFrequencyX')
      gui
        .add(customUniforms.uBigWavesFrequencyY, 'value')
        .min(0)
        .max(10)
        .step(0.001)
        .name('uBigWavesFrequencyY')
      gui
        .add(customUniforms.uBigWavesSpeed, 'value')
        .min(0)
        .max(4)
        .step(0.001)
        .name('uBigWavesSpeed')

      gui
        .add(customUniforms.uSmallWavesElevation, 'value')
        .min(0)
        .max(1)
        .step(0.001)
        .name('uSmallWavesElevation')
      gui
        .add(customUniforms.uSmallWavesFrequency, 'value')
        .min(0)
        .max(100)
        .step(0.001)
        .name('uSmallWavesFrequency')
      gui
        .add(customUniforms.uSmallWavesSpeed, 'value')
        .min(0)
        .max(4)
        .step(0.001)
        .name('uSmallWavesSpeed')
    }
    addGUI()
  }, [customUniforms])

  // Configure shader
  const onBeforeCompile = (shader) => {
    for (const property in customUniforms) {
      shader.uniforms[property] = customUniforms[property]
    }
    shader.vertexShader = vertUniforms + shader.vertexShader
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      vertMain
    )
    shader.fragmentShader = fragUniforms + shader.fragmentShader
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      fragCommon
    )
    shader.fragmentShader = shader.fragmentShader.replace(
      'gl_FragColor = vec4( outgoingLight, diffuseColor.a )',
      fragMain
    )
  }
  const oBC = useCallback(onBeforeCompile, [customUniforms])

  useFrame(({ clock, mouse, camera }) => {
    const elapsedTime = clock.getElapsedTime()
    customUniforms.uTime.value = elapsedTime

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      0 + mouse.x / 4,
      0.08
    )
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      0 + mouse.y / 4,
      0.08
    )
  })

  function handlePointerOver() {
    gsap.to(customUniforms.uSmallWavesElevation, {
      value: 0.35,
    })
  }

  function handlePointerOut() {
    gsap.to(customUniforms.uSmallWavesElevation, {
      value: 0.0,
    })
  }

  let wobble = null
  function handleClick() {
    if (wobble) return
    wobble = gsap.to(customUniforms.uBigWavesFrequencyY, {
      value: 4.0,
      repeat: 1,
      yoyo: true,
      yoyoEase: 'linear',
      ease: 'slow(0.7, 0.7, false)',
      onComplete: () => (wobble = null),
    })
  }

  // Add textures
  const bumpMap = useTexture('/textures/bump.jpeg')
  const envMap = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    { path: '/textures/cube/' }
  )
  envMap.encoding = THREE.sRGBEncoding

  return (
    <mesh
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <sphereGeometry args={[2, 512, 512]} />
      <meshPhysicalMaterial
        onBeforeCompile={oBC}
        bumpMap={bumpMap}
        bumpScale={0.01}
        envMap={envMap}
        envMapIntensity={1.0}
        color="black"
        roughness={0.0}
        metalness={0.0}
        opacity={1.0}
        transparent
        clearcoat={1.0}
        clearcoatRoughness={0.0}
        transmission={0.95}
      />
    </mesh>
  )
}

export default Blob
