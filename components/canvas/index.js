import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls, Text } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from '@react-three/postprocessing'
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

    {/* <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      <Noise opacity={0.2} />
      <Vignette eskil={false} offset={0.1} darkness={4.0} />
    </EffectComposer> */}
  </Canvas>
)

export default LCanvas
