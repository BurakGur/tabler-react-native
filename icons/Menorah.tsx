import * as React from "react";
import type { SVGProps } from "react";
const SvgMenorah = ({
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
    className="icon icon-tabler icon-tabler-menorah"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 4v16M8 4v2a4 4 0 1 0 8 0V4" />
    <path d="M4 4v2a8 8 0 1 0 16 0V4M10 20h4" />
  </svg>
);
export default SvgMenorah;
