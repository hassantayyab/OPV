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
// varying vec2 vUv;

#pragma glslify: cnoise4 = require(glsl-noise/classic/4d)
