import { ShaderMaterial } from 'three'
import vertexShader from './vert.glsl'
import fragmentShader from './frag.glsl'

export default class RefractionMaterial extends ShaderMaterial {
  constructor(options) {
    super({
      vertexShader,
      fragmentShader,
    })

    this.uniforms = {
      envMap: { value: options.envMap },
      resolution: { value: options.resolution },

      uTime: { value: options.uTime },

      uBigWavesElevation: { value: options.uBigWavesElevation },
      uBigWavesFrequencyX: { value: options.uBigWavesFrequencyX },
      uBigWavesFrequencyY: { value: options.uBigWavesFrequencyY },
      uBigWavesSpeed: { value: options.uBigWavesSpeed },

      uSmallWavesElevation: { value: options.uSmallWavesElevation },
      uSmallWavesFrequency: { value: options.uSmallWavesFrequency },
      uSmallWavesSpeed: { value: options.uSmallWavesSpeed },
    }
  }
}
