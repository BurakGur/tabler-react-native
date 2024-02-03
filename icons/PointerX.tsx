import * as React from "react";
import type { SVGProps } from "react";
const SvgPointerX = ({
  size = 24,
  stroke = 2,
  ...props
}: {
  size: number,
  stroke: number,
  props: SVGProps,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className="icon icon-tabler icon-tabler-pointer-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m15.768 13.212-.99-.99 3.113-2.09a1.2 1.2 0 0 0-.309-2.228L4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093.908.908M22 22l-5-5M17 22l5-5" />
  </svg>
);
export default SvgPointerX;
