import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyDogecoin = ({
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
    className="icon icon-tabler icon-tabler-currency-dogecoin"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 12h6M9 6v12M6 18h6a6 6 0 1 0 0-12H6" />
  </svg>
);
export default SvgCurrencyDogecoin;
