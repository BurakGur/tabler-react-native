import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyLitecoin = ({
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
    className="icon icon-tabler icon-tabler-currency-litecoin"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 19H9.806a2 2 0 0 1-1.98-2.283L9.5 5M14 9l-9 4" />
  </svg>
);
export default SvgCurrencyLitecoin;
