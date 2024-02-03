import * as React from "react";
import type { SVGProps } from "react";
const SvgBracketsContainEnd = ({
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
    className="icon icon-tabler icon-tabler-brackets-contain-end"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 4h4v16h-4M5 16h.01M9 16h.01M13 16h.01" />
  </svg>
);
export default SvgBracketsContainEnd;
