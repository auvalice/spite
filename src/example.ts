import { mat2x3, vec3 } from './math';

const mat = new mat2x3();
mat[0] = vec3.one;
mat[0][1] = 2;
console.log(mat[0][1]);
