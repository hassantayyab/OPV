uniform float uTime;

uniform float uBigWavesElevation;
uniform float uBigWavesFrequencyX;
uniform float uBigWavesFrequencyY;
uniform float uBigWavesSpeed;

uniform float uSmallWavesElevation;
uniform float uSmallWavesFrequency;
uniform float uSmallWavesSpeed;
uniform float uSmallIterations;

varying vec3 vPosition;
varying vec2 vUv;
varying vec3 worldNormal;
varying vec3 viewDirection;

#pragma glslify: cnoise4 = require(glsl-noise/classic/4d)


void main() {

  vec2 uBigWavesFrequency = vec2(uBigWavesFrequencyX, uBigWavesFrequencyY);
  float waves = sin(position.x * uBigWavesFrequency.x + uTime * uBigWavesSpeed) *
              sin(position.y * uBigWavesFrequency.y + uTime * uBigWavesSpeed) *
              uBigWavesElevation;
  

  float distortion = cnoise4(vec4(normal * uSmallWavesFrequency, uTime * uSmallWavesSpeed)) * uSmallWavesElevation;
  vec3 newPosition = position + (normal * distortion);
  newPosition.z += waves;

  vUv = uv;
  vPosition = newPosition;
  
  vec4 transformedNormal = vec4(normal, 0.0);
  vec4 transformedPosition = vec4(newPosition, 1.0);
  
  // #ifdef USE_INSTANCING
  //   transformedNormal = instanceMatrix * transformedNormal;
  //   transformedPosition = instanceMatrix * transformedPosition;
  // #endif

  vec4 worldPosition = modelMatrix * vec4(newPosition, 1.0);
  worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;
  viewDirection = normalize(worldPosition.xyz - cameraPosition);;
  gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;
}