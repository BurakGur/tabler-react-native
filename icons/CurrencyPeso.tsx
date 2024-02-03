import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyPeso = ({
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
    className="icon icon-tabler icon-tabler-currency-peso"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 19V5h3.5a4.5 4.5 0 1 1 0 9H8M18 8H6M18 11H6" />
  </svg>
);
export default SvgCurrencyPeso;
