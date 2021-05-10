float strength = 1.0 - abs(cnoise(vUv * 10.0));

float angle = (vPosition.z + uTime);
mat2 rotateMatrix = get2dRotateMatrix(angle);
vec2 rotateUv = rotateMatrix * vUv;

vec3 fragColor = mix(outgoingLight, vec3(rotateUv + 0.3, 1.0), strength);
gl_FragColor = vec4(fragColor, diffuseColor.a)