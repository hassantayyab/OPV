import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

import BlobScene from './blob'

const LCanvas = () => (
  <Canvas
    linear
    camera={{ fov: 75, position: [0, 0, 5] }}
    onCreated={({ gl }) => {
      gl.physicallyCorrectLights = true
      gl.outputEncoding = THREE.sRGBEncoding
    }}
  >
    <Preload all />
    <Suspense fallback={null}>
      <BlobScene />
    </Suspense>
  </Canvas>
)

export default LCanvas
