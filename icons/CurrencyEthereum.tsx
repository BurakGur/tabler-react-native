import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyEthereum = ({
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
    className="icon icon-tabler icon-tabler-currency-ethereum"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6 12 6-9 6 9-6 9z" />
    <path d="m6 12 6-3 6 3-6 2z" />
  </svg>
);
export default SvgCurrencyEthereum;
