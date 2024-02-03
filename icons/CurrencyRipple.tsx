import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRipple = ({
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
    className="icon icon-tabler icon-tabler-currency-ripple"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M10 12h3l2-2.5M15 14.5 13 12" />
  </svg>
);
export default SvgCurrencyRipple;
