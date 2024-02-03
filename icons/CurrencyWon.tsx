import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyWon = ({
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
    className="icon icon-tabler icon-tabler-currency-won"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m4 6 3.245 11.358a.85.85 0 0 0 1.624.035L12 8l3.131 9.393a.85.85 0 0 0 1.624-.035L20 6M21 10H3M21 14H3" />
  </svg>
);
export default SvgCurrencyWon;
