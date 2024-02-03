import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptTax = ({
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
    className="icon icon-tabler icon-tabler-receipt-tax"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 14 6-6" />
    <circle cx={9.5} cy={8.5} r={0.5} fill="currentColor" />
    <circle cx={14.5} cy={13.5} r={0.5} fill="currentColor" />
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2z" />
  </svg>
);
export default SvgReceiptTax;
