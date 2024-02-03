import * as React from "react";
import type { SVGProps } from "react";
const SvgIceCream2 = ({
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
    className="icon icon-tabler icon-tabler-ice-cream-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17.657 11a6 6 0 1 0-11.315 0M6.342 11 12 22l5.657-11z" />
  </svg>
);
export default SvgIceCream2;
