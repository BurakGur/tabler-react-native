import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptEuro = ({
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
    className="icon icon-tabler icon-tabler-receipt-euro"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2z" />
    <path d="M15 7.8c-.523-.502-1.172-.8-1.875-.8C11.398 7 10 8.791 10 11s1.398 4 3.125 4c.703 0 1.352-.298 1.874-.8M9 11h4" />
  </svg>
);
export default SvgReceiptEuro;
