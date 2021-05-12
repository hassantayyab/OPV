import { useFrame } from '@react-three/fiber'
import { useCallback, useEffect, useMemo } from 'react'
import { useCubeTexture, useTexture } from '@react-three/drei'
import * as THREE from 'three'

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
      uBigWavesFrequency: { value: new THREE.Vector2(4, 1) },
      uBigWavesSpeed: { value: 1.5 },

      uSmallWavesElevation: { value: 0.0 },
      uSmallWavesFrequency: { value: 0.0 },
      uSmallWavesSpeed: { value: 0.0 },
    }),
    []
  )

  useEffect(() => {
    const gui = new dat.GUI()
    const addGUI = () => {
      gui
        .add(customUniforms.uBigWavesElevation, 'value')
        .min(0)
        .max(1)
        .step(0.001)
        .name('uBigWavesElevation')
      gui
        .add(customUniforms.uBigWavesFrequency.value, 'x')
        .min(0)
        .max(10)
        .step(0.001)
        .name('uBigWavesFrequencyX')
      gui
        .add(customUniforms.uBigWavesFrequency.value, 'y')
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

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    customUniforms.uTime.value = elapsedTime
  })

  const bumpMap = useTexture('/textures/bump.jpeg')

  const envMap = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    { path: '/textures/cube/' }
  )
  envMap.encoding = THREE.sRGBEncoding

  return (
    <mesh>
      <sphereGeometry args={[2, 512, 512]} />
      <meshPhysicalMaterial
        onBeforeCompile={oBC}
        bumpMap={bumpMap}
        bumpScale={0.01}
        envMap={envMap}
        envMapIntensity={1.0}
        color="#000000"
        roughness={0.0}
        metalness={0.0}
        opacity={1.0}
        transparent
        clearcoat={1.0}
        clearcoatRoughness={0.0}
        transmission={1.0}
      />
    </mesh>
  )
}

export default Blob
