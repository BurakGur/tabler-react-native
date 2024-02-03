import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyHryvnia = ({
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
    className="icon icon-tabler icon-tabler-currency-hryvnia"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 7a2.64 2.64 0 0 1 2.562-2h3.376A2.64 2.64 0 0 1 16.5 7a2.57 2.57 0 0 1-1.344 2.922L9.28 12.86A3.34 3.34 0 0 0 7.5 16.5a3.11 3.11 0 0 0 3.05 2.5h2.888A2.64 2.64 0 0 0 16 17M6 10h12M6 14h12" />
  </svg>
);
export default SvgCurrencyHryvnia;
