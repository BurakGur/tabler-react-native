import * as React from "react";
import type { SVGProps } from "react";
const SvgPolaroid = ({
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
    className="icon icon-tabler icon-tabler-polaroid"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM4 16h16" />
    <path d="m4 12 3-3c.928-.893 2.072-.893 3 0l4 4" />
    <path d="m13 12 2-2c.928-.893 2.072-.893 3 0l2 2M14 7h.01" />
  </svg>
);
export default SvgPolaroid;
