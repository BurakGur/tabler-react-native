import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyForint = ({
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
    className="icon icon-tabler icon-tabler-currency-forint"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 4H7a3 3 0 0 0-3 3v12M10 11H4M16 4v13a2 2 0 0 0 2 2h2M19 9h-5" />
  </svg>
);
export default SvgCurrencyForint;
