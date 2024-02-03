import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRenminbi = ({
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
    className="icon icon-tabler icon-tabler-currency-renminbi"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 9v8a2 2 0 1 0 4 0M19 9H5M19 5H5M9 9v4c0 2.5-.667 4-2 6" />
  </svg>
);
export default SvgCurrencyRenminbi;
