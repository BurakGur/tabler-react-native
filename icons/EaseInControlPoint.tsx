import * as React from "react";
import type { SVGProps } from "react";
const SvgEaseInControlPoint = ({
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
    className="icon icon-tabler icon-tabler-ease-in-control-point"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 19c8 0 18-16 18-16M17 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 19h-2M12 19h-2" />
  </svg>
);
export default SvgEaseInControlPoint;
