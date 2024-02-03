import * as React from "react";
import type { SVGProps } from "react";
const SvgDrone = ({
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
    className="icon icon-tabler icon-tabler-drone"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 10h4v4h-4zM10 10 6.5 6.5M9.96 6A3.5 3.5 0 1 0 6 9.96M14 10l3.5-3.5M18 9.96A3.5 3.5 0 1 0 14.04 6M14 14l3.5 3.5M14.04 18A3.5 3.5 0 1 0 18 14.04M10 14l-3.5 3.5M6 14.04A3.5 3.5 0 1 0 9.96 18" />
  </svg>
);
export default SvgDrone;
