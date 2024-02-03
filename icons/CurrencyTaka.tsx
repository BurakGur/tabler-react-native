import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyTaka = ({
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
    className="icon icon-tabler icon-tabler-currency-taka"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15.5 15.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5M8 11h6" />
  </svg>
);
export default SvgCurrencyTaka;
