import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'
import Blob from './blob'

const LCanvas = () => (
  <Canvas
    onCreated={({ gl }) => {
      gl.physicallyCorrectLights = true
      gl.outputEncoding = THREE.sRGBEncoding
    }}
    linear
    camera={{ fov: 75, position: [0, 0, 5] }}
    gl={{}}
  >
    <OrbitControls enablePan enableZoom enableRotate />
    <Preload all />
    <Suspense fallback={null}>
      <Blob />
    </Suspense>
  </Canvas>
)

export default LCanvas
