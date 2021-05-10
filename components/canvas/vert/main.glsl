#include <begin_vertex>

float waves = sin(position.x * uBigWavesFrequency.x + uTime * uBigWavesSpeed) *
            sin(position.y * uBigWavesFrequency.y + uTime * uBigWavesSpeed) *
            uBigWavesElevation;

vNormal = normalMatrix * normalize(normal);

float distortion = cnoise(vec4(normal * uSmallWavesFrequency, uTime * uSmallWavesSpeed)) * uSmallWavesElevation;
vec3 newPosition = position + (normal * distortion);
transformed = newPosition;

transformed.z += waves;

vPosition = transformed;
vUv = uv;