import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrency = ({
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
    className="icon icon-tabler icon-tabler-currency"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0M4 4l3 3M20 4l-3 3M4 20l3-3M20 20l-3-3" />
  </svg>
);
export default SvgCurrency;
