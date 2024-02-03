import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyLari = ({
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
    className="icon icon-tabler icon-tabler-currency-lari"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 13a6 6 0 1 0-6 6M6 19h12M10 5v7M14 12V5" />
  </svg>
);
export default SvgCurrencyLari;
