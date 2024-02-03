import * as React from "react";
import type { SVGProps } from "react";
const SvgMultiplier05X = ({
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
    className="icon icon-tabler icon-tabler-multiplier-0-5x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 16h2a2 2 0 1 0 0-4H8V8h4M5 16v.01M15 16l4-4M19 16l-4-4" />
  </svg>
);
export default SvgMultiplier05X;
