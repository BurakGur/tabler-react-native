import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRiyal = ({
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
    className="icon icon-tabler icon-tabler-currency-riyal"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 9v2a2 2 0 1 1-4 0v-1 1a2 2 0 1 1-4 0v-1 4a2 2 0 1 1-4 0v-2M18 12.01V12M22 10v1a5 5 0 0 1-5 5" />
  </svg>
);
export default SvgCurrencyRiyal;
