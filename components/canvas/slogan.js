import { Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Slogan() {
  const { size } = useThree()
  console.log(size.width)

  function normalize(val, min, max) {
    return (val - min) / (max - min)
  }

  const props = {
    color: 'black',
    // fontSize: 1.8,
    fontSize: Math.min(size.width / 1000, 1.8),
    layers: 1,
    letterSpacing: -0.06,
    font: '/fonts/BeausiteClassicWeb-Light.ttf',
  }

  return (
    <group>
      <Text position={[-2.7, 1.5, -1]} {...props}>
        Confidence
      </Text>
      <Text position={[4.3, -0.8, -1]} {...props}>
        Through
      </Text>
      <Text position={[-2.5, -2.0, -1]} {...props}>
        Clarity
      </Text>
    </group>
  )
}
