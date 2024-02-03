import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyLira = ({
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
    className="icon icon-tabler icon-tabler-currency-lira"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 5v15a7 7 0 0 0 7-7M6 15l8-4M14 7l-8 4" />
  </svg>
);
export default SvgCurrencyLira;
