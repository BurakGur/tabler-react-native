import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag3 = ({
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
    className="icon icon-tabler icon-tabler-flag-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 14h14l-4.5-4.5L19 5H5v16" />
  </svg>
);
export default SvgFlag3;
