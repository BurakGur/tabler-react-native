import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyEuro = ({
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
    className="icon icon-tabler icon-tabler-currency-euro"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17.2 7a6 7 0 1 0 0 10M13 10H5m0 4h8" />
  </svg>
);
export default SvgCurrencyEuro;
