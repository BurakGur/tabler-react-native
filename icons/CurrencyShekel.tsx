import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyShekel = ({
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
    className="icon icon-tabler icon-tabler-currency-shekel"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 18V6h4a4 4 0 0 1 4 4v4" />
    <path d="M18 6v12h-4a4 4 0 0 1-4-4v-4" />
  </svg>
);
export default SvgCurrencyShekel;
