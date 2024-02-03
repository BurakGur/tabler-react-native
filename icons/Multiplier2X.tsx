import * as React from "react";
import type { SVGProps } from "react";
const SvgMultiplier2X = ({
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
    className="icon icon-tabler icon-tabler-multiplier-2x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m14 16 4-4M18 16l-4-4M6 10a2 2 0 1 1 4 0c0 .591-.417 1.318-.816 1.858L6 16.001h4" />
  </svg>
);
export default SvgMultiplier2X;
