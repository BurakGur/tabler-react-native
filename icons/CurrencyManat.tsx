import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyManat = ({
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
    className="icon icon-tabler icon-tabler-currency-manat"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 19v-7a5 5 0 1 1 10 0v7M12 5v14" />
  </svg>
);
export default SvgCurrencyManat;
