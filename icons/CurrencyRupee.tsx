import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRupee = ({
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
    className="icon icon-tabler icon-tabler-currency-rupee"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 5H7h3a4 4 0 0 1 0 8H7l6 6M7 9h11" />
  </svg>
);
export default SvgCurrencyRupee;
