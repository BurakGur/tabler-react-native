import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRupeeNepalese = ({
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
    className="icon icon-tabler icon-tabler-currency-rupee-nepalese"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 5H4h3a4 4 0 1 1 0 8H4l6 6M21 17l-4.586-4.414a2 2 0 0 0-2.828 2.828l.707.707" />
  </svg>
);
export default SvgCurrencyRupeeNepalese;
