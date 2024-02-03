import * as React from "react";
import type { SVGProps } from "react";
const SvgDivide = ({
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
    className="icon icon-tabler icon-tabler-divide"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <circle cx={12} cy={6} r={1} fill="currentColor" />
    <circle cx={12} cy={18} r={1} fill="currentColor" />
    <path d="M5 12h14" />
  </svg>
);
export default SvgDivide;
