import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencySolana = ({
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
    className="icon icon-tabler icon-tabler-currency-solana"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 18h12l4-4H8zM8 14l-4-4h12l4 4M16 10l4-4H8l-4 4" />
  </svg>
);
export default SvgCurrencySolana;
