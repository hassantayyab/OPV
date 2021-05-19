uniform sampler2D envMap;
uniform sampler2D backfaceMap;
uniform vec2 resolution;
uniform float uTime;

varying vec3 vPosition;
varying vec2 vUv;
varying vec3 worldNormal;
varying vec3 viewDirection;

#pragma glslify: cnoise2 = require(glsl-noise/classic/2d)


float ior = 1.3;
float a = 0.33;

// vec3 fogColor = vec3(1.0);
vec3 reflectionColor = vec3(1.0);

float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {
  return pow( 1.00 + dot( viewDirection, worldNormal), 20.0 );
}

mat2 get2dRotateMatrix(float _angle) {
    return mat2(cos(_angle), - sin(_angle), sin(_angle), cos(_angle));
}  

void main() {
  // screen coordinates
  vec2 uv = gl_FragCoord.xy / resolution;

  // sample backface data from texture
  vec3 backfaceNormal = texture2D(backfaceMap, uv).rgb;

  // combine backface and frontface normal
  vec3 normal = worldNormal * 0.5 * (1.0 - a) - backfaceNormal * a;

  // calculate refraction and apply to uv
  vec3 refracted = refract(viewDirection, normal, 1.0/ior);
  uv += refracted.xy;

  // sample environment texture
  vec4 tex = texture2D(envMap, uv);

  // calculate fresnel
  float fresnel = fresnelFunc(viewDirection, normal);

  vec4 color = tex;

  // apply noise color
  float strength = 1.0 - abs(cnoise2(vUv * 10.0));
  float angle = (vPosition.z + uTime);
  mat2 rotateMatrix = get2dRotateMatrix(angle);
  vec2 rotateUv = rotateMatrix * vUv;

  // apply fresnel
  color.rgb = mix(color.rgb, vec3(rotateUv, 1.0), fresnel);

  gl_FragColor = vec4(color.rgb, 1.0);
}