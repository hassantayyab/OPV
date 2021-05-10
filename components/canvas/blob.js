import { useFrame } from '@react-three/fiber'
import { useCallback, memo } from 'react'
import { useCubeTexture } from '@react-three/drei'
import * as THREE from 'three'

import { vertUniforms, vertMain } from './vert'
import { fragUniforms, fragCommon, fragMain } from './frag'

const Blob = memo(() => {
  const envMap = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    { path: '/cube/' }
  )
  envMap.encoding = THREE.sRGBEncoding

  const customUniforms = {
    uTime: { value: 0 },
    uBigWavesElevation: { value: 0.2 },
    uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
    uBigWavesSpeed: { value: 0.75 },

    uSmallWavesElevation: { value: 0.0 },
    uSmallWavesFrequency: { value: 3 },
    uSmallWavesSpeed: { value: 0.2 },
    uSmallIterations: { value: 1 },
  }

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

  const oBC = useCallback(onBeforeCompile)

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    customUniforms.uTime.value = elapsedTime
  })

  return (
    <mesh>
      <sphereGeometry args={[2, 512, 512]} />
      <meshPhysicalMaterial
        envMap={envMap}
        envMapIntensity={2.0}
        color="#000000"
        roughness={0.0}
        metalness={0.0}
        opacity={1.0}
        transparent
        clearcoat={1.0}
        clearcoatRoughness={0.0}
        transmission={0.4}
        onBeforeCompile={oBC}
      />
    </mesh>
  )
})

export default Blob
