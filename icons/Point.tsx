import * as React from "react";
import type { SVGProps } from "react";
const SvgPoint = ({
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
    className="icon icon-tabler icon-tabler-point"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
  </svg>
);
export default SvgPoint;
