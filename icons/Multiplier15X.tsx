import * as React from "react";
import type { SVGProps } from "react";
const SvgMultiplier15X = ({
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
    className="icon icon-tabler icon-tabler-multiplier-1-5x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 16V8l-2 2M10 16h2a2 2 0 1 0 0-4h-2V8h4M7 16v.01M17 16l4-4M21 16l-4-4" />
  </svg>
);
export default SvgMultiplier15X;
