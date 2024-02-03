import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandZwift = ({
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
    className="icon icon-tabler icon-tabler-brand-zwift"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.5 4C4.035 4 3 5.101 3 6.5S4.035 9 5.5 9H8l-4.637 7.19a2.43 2.43 0 0 0-.011 2.538c.473.787 1.35 1.272 2.3 1.272H16.5c1.465 0 2.5-1.101 2.5-2.5S17.965 15 16.5 15H14l7-11z" />
  </svg>
);
export default SvgBrandZwift;
