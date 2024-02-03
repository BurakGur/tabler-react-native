import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyKip = ({
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
    className="icon icon-tabler icon-tabler-currency-kip"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 12h12M9 5v14M16 19a7 7 0 0 0-7-7 7 7 0 0 0 7-7" />
  </svg>
);
export default SvgCurrencyKip;
