import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptRupee = ({
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
    className="icon icon-tabler icon-tabler-receipt-rupee"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2z" />
    <path d="M15 7H9h1a3 3 0 0 1 0 6H9l3 3M9 10h6" />
  </svg>
);
export default SvgReceiptRupee;
