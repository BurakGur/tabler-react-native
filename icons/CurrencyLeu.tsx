import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyLeu = ({
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
    className="icon icon-tabler icon-tabler-currency-leu"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 18h-7a3 3 0 0 1-3-3V5" />
  </svg>
);
export default SvgCurrencyLeu;
