import * as React from "react";
import type { SVGProps } from "react";
const SvgDiscountOff = ({
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
    className="icon icon-tabler icon-tabler-discount-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 15 3-3m2-2 1-1M9.148 9.145A.498.498 0 0 0 9.5 10a.5.5 0 0 0 .35-.142M14.148 14.145A.498.498 0 0 0 14.5 15a.5.5 0 0 0 .35-.142" />
    <path d="M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M3 3l18 18" />
  </svg>
);
export default SvgDiscountOff;
