import { WebGLRenderTarget, LinearFilter, MathUtils, Color } from 'three'
import React, { useMemo, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useAspect, useTexture } from '@react-three/drei'
import { gsap } from 'gsap'
import RefractionMaterial from './refractionMaterial'
import BackfaceMaterial from './backfaceMaterial'
import Slogan from './slogan'

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
  const [
    envFbo,
    backfaceFbo,
    backfaceMaterial,
    refractionMaterial,
  ] = useMemo(() => {
    const envFboMemo = new WebGLRenderTarget(size.width, size.height)
    const backfaceFboMemo = new WebGLRenderTarget(size.width, size.height)
    const backfaceMaterialMemo = new BackfaceMaterial({
      uTime: 0,
      uBigWavesElevation: 0.25,
      uBigWavesFrequencyX: 4.0,
      uBigWavesFrequencyY: 1.0,
      uBigWavesSpeed: 1.5,
      uSmallWavesElevation: 0.0,
      uSmallWavesFrequency: 1.0,
      uSmallWavesSpeed: 1.5,
    })
    const refractionMaterialMemo = new RefractionMaterial({
      envMap: envFboMemo.texture,
      backfaceMap: backfaceFboMemo.texture,
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
    return [
      envFboMemo,
      backfaceFboMemo,
      backfaceMaterialMemo,
      refractionMaterialMemo,
    ]
  }, [size])

  // Render-loop
  useFrame(({ camera }) => {
    // Render env to fbo
    gl.autoClear = false
    camera.layers.set(1)
    gl.setRenderTarget(envFbo)
    gl.render(scene, camera)
    // Render cube backfaces to fbo
    // camera.layers.set(0)
    // model.current.material = backfaceMaterial
    // gl.setRenderTarget(backfaceFbo)
    // gl.clearDepth()
    // gl.render(scene, camera)
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
    // backfaceMaterial.uniforms.uTime.value = elapsedTime
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

  return (
    <mesh
      ref={model}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <sphereGeometry args={[1.9, 64, 64]} />
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
