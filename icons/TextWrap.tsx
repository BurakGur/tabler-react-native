import * as React from "react";
import type { SVGProps } from "react";
const SvgTextWrap = ({
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
    className="icon icon-tabler icon-tabler-text-wrap"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6h16M4 18h5M4 12h13a3 3 0 0 1 0 6h-4l2-2m0 4-2-2" />
  </svg>
);
export default SvgTextWrap;
