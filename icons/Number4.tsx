import * as React from "react";
import type { SVGProps } from "react";
const SvgNumber4 = ({
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
    className="icon icon-tabler icon-tabler-number-4"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 20V5L7 16h10" />
  </svg>
);
export default SvgNumber4;
