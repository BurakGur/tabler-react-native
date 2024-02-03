import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptOff = ({
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
    className="icon icon-tabler icon-tabler-receipt-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 21V5m2-2h10a2 2 0 0 1 2 2v10m0 4.01V21l-3-2-2 2-2-2-2 2-2-2-3 2M11 7h4M9 11h2M13 15h2M15 11v.01M3 3l18 18" />
  </svg>
);
export default SvgReceiptOff;
