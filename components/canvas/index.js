import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'
import BlobScene from './blob'

const LCanvas = () => (
  <Canvas
    linear
    camera={{ fov: 75, position: [0, 0, 5] }}
    onCreated={({ gl }) => {
      // gl.setClearColor(new THREE.Color('white'))
      gl.physicallyCorrectLights = true
      gl.outputEncoding = THREE.sRGBEncoding
    }}
  >
    {/* <OrbitControls enablePan enableZoom enableRotate /> */}
    <Preload all />
    <Suspense fallback={null}>
      <BlobScene />
    </Suspense>
  </Canvas>
)

export default LCanvas
