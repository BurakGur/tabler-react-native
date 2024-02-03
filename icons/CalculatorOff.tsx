import * as React from "react";
import type { SVGProps } from "react";
const SvgCalculatorOff = ({
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
    className="icon icon-tabler icon-tabler-calculator-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.823 19.824A2 2 0 0 1 18 21H6a2 2 0 0 1-2-2V5c0-.295.064-.575.178-.827M7 3h11a2 2 0 0 1 2 2v11" />
    <path d="M10 10H9a1 1 0 0 1-1-1V8m3-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1M8 14v.01M12 14v.01M8 17v.01M12 17v.01M16 17v.01M3 3l18 18" />
  </svg>
);
export default SvgCalculatorOff;
