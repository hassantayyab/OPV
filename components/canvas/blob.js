import { WebGLRenderTarget, LinearFilter, MathUtils } from 'three'
import React, { useMemo, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useAspect, useTexture } from '@react-three/drei'
import { gsap } from 'gsap'
import RefractionMaterial from './refractionMaterial'
import Slogan from './slogan'
import { responsive } from '../utils/helpers'

function Background() {
  const texture = useTexture('./blob/blank.png')
  const size = useAspect(5000, 3800)
  return (
    <mesh layers={1} scale={size}>
      <planeGeometry />
      <meshBasicMaterial
        map={texture}
        map-minFilter={LinearFilter}
        depthTest={false}
      />
    </mesh>
  )
}

function Blob() {
  const { size, gl, scene } = useThree()
  const model = useRef()

  // Create Fbo's and materials
  const [envFbo, refractionMaterial] = useMemo(() => {
    const envFboMemo = new WebGLRenderTarget(size.width, size.height)
    const refractionMaterialMemo = new RefractionMaterial({
      envMap: envFboMemo.texture,
      resolution: [size.width, size.height],
      uTime: 0,
      uBigWavesElevation: 0.25,
      uBigWavesFrequencyX: 4.0,
      uBigWavesFrequencyY: 1.0,
      uBigWavesSpeed: 1.5,
      uSmallWavesElevation: 0.0,
      uSmallWavesFrequency: 1.0,
      uSmallWavesSpeed: 1.5,
    })
    return [envFboMemo, refractionMaterialMemo]
  }, [size])

  // Render-loop
  useFrame(({ camera }) => {
    // Render env to fbo
    gl.autoClear = false
    camera.layers.set(1)
    gl.setRenderTarget(envFbo)
    gl.render(scene, camera)

    // Render env to screen
    camera.layers.set(1)
    gl.setRenderTarget(null)
    gl.render(scene, camera)
    gl.clearDepth()
    // Render cube with refraction material to screen
    camera.layers.set(0)
    model.current.material = refractionMaterial
    gl.render(scene, camera)
  }, 1)

  useFrame(({ mouse, clock }) => {
    const elapsedTime = clock.getElapsedTime()
    refractionMaterial.uniforms.uTime.value = elapsedTime
    model.current.position.x = MathUtils.lerp(
      model.current.position.x,
      0 + mouse.x / 4,
      0.08
    )
    model.current.position.y = MathUtils.lerp(
      model.current.position.y,
      0 + mouse.y / 4,
      0.08
    )
  })

  // Interactions
  function handlePointerOver() {
    gsap.to(refractionMaterial.uniforms.uSmallWavesElevation, {
      value: 0.35,
    })
  }

  function handlePointerOut() {
    gsap.to(refractionMaterial.uniforms.uSmallWavesElevation, {
      value: 0.0,
    })
  }

  let wobble = null
  function handleClick() {
    if (wobble) return
    wobble = gsap.to(refractionMaterial.uniforms.uBigWavesFrequencyY, {
      value: 4.0,
      repeat: 1,
      yoyo: true,
      yoyoEase: 'linear',
      ease: 'slow(0.7, 0.7, false)',
      onComplete: () => (wobble = null),
    })
  }

  const blobSize = responsive(size.width, {
    xs: 1.2,
    sm: 1.3,
    md: 1.5,
    lg: 1.5,
    xl: 1.9,
  })

  return (
    <mesh
      ref={model}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <sphereGeometry args={[blobSize, 64, 64]} />
      <meshStandardMaterial />
    </mesh>
  )
}

export default function BlobScene() {
  return (
    <>
      <Background />
      <Slogan />
      <Blob />
    </>
  )
}
