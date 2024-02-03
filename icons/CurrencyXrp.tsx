import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyXrp = ({
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
    className="icon icon-tabler icon-tabler-currency-xrp"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m5 5 3.585 3.585a4.83 4.83 0 0 0 6.83 0L19 5M5 19l3.585-3.585a4.83 4.83 0 0 1 6.83 0L19 18.999" />
  </svg>
);
export default SvgCurrencyXrp;
