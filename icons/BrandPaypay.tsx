import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPaypay = ({
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
    className="icon icon-tabler icon-tabler-brand-paypay"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6.375 21 3.938-13.838M3 6c16.731 0 21.231 9.881 4.5 11" />
    <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2" />
  </svg>
);
export default SvgBrandPaypay;
