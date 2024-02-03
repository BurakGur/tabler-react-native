import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyFrank = ({
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
    className="icon icon-tabler icon-tabler-currency-frank"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 5h-6a2 2 0 0 0-2 2v12M7 15h4M9 11h7" />
  </svg>
);
export default SvgCurrencyFrank;
