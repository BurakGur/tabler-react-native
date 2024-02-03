import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyFlorin = ({
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
    className="icon icon-tabler icon-tabler-currency-florin"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 12h8M7 19c1.213 0 2.31-.723 2.788-1.838l4.424-10.324A3.03 3.03 0 0 1 17 5" />
  </svg>
);
export default SvgCurrencyFlorin;
