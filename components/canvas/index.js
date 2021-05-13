import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls, Text, Reflector } from '@react-three/drei'
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
    {/* <OrbitControls enablePan enableZoom enableRotate /> */}
    <Preload all />
    <Suspense fallback={null}>
      <Blob />
      {/* <Text
        color="red" // default
        anchorX="center" // default
        anchorY="middle" // default
        fontSize={2}
        position={[0, 0, -5]}
      >
        hello world!
      </Text> */}
    </Suspense>
  </Canvas>
)

export default LCanvas
