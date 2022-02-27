#version 300 es

in vec4 v_pos;

out vec4 f_pos;

void main() {
  f_pos = v_pos;
  gl_Position = v_pos;
}
