import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptBitcoin = ({
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
    className="icon icon-tabler icon-tabler-receipt-bitcoin"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2z" />
    <path d="M9 7h4.09C14.145 7 15 7.895 15 9s-.855 2-1.91 2c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2H9M10 11h4M10 6v10-9M13 6v1M13 15v1" />
  </svg>
);
export default SvgReceiptBitcoin;
