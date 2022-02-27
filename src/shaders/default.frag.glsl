#version 300 es

in vec4 f_pos;

out vec4 o_color;

void main() {
  o_color = vec4(f_pos.x, f_pos.y, 1.0, 1.0);
}
