uniform float uTime;

varying vec3 vPosition;
varying vec2 vUv;

#pragma glslify: cnoise2 = require(glsl-noise/classic/2d)
