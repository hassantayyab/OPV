import { Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { responsive } from '../utils/helpers'

export default function Slogan() {
  const { size } = useThree()

  const props = {
    color: 'black',
    fontSize: 1.8,
    layers: 1,
    letterSpacing: -0.06,
    font: '/fonts/BeausiteClassicWeb-Light.ttf',

    scale: responsive(size.width, {
      xs: 0.3,
      sm: 0.5,
      md: 0.6,
      lg: 0.8,
      xl: 1.0,
      xxl: 0.8,
    }),
  }

  const distance1 = responsive(size.width, {
    xs: -0.4,
    sm: -1.0,
    md: -1.5,
    lg: -2.0,
    xl: -2.7,
    xxl: -2.2,
  })
  const distance2 = distance1 * -1.6
  const distance3 = distance1 * 0.9

  return (
    <group>
      <Text position={[distance1, 1.5, -1]} {...props}>
        Confidence
      </Text>
      <Text position={[distance2, -0.8, -1]} {...props}>
        Through
      </Text>
      <Text position={[distance3, -2.0, -1]} {...props}>
        Clarity
      </Text>
    </group>
  )
}
