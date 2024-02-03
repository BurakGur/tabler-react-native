import * as React from "react";
import type { SVGProps } from "react";
const SvgMathSymbols = ({
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
    className="icon icon-tabler icon-tabler-math-symbols"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12h18M12 3v18M16.5 4.5l3 3M19.5 4.5l-3 3M6 4v4M4 6h4M18 16h.01M18 20h.01M4 18h4" />
  </svg>
);
export default SvgMathSymbols;
