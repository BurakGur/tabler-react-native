import * as React from "react";
import type { SVGProps } from "react";
const SvgTransactionYen = ({
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
    className="icon icon-tabler icon-tabler-transaction-yen"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 16h6M15 12l3 4.5M21 12l-3 4.5V21M15 19h6M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1" />
  </svg>
);
export default SvgTransactionYen;
