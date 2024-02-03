import * as React from "react";
import type { SVGProps } from "react";
const SvgBasketCheck = ({
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
    className="icon icon-tabler icon-tabler-basket-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17 10-2-6M7 10l2-6M11 20H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H19a2 2 0 0 1 1.977 2.304l-.479 2.729" />
    <path d="M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 19l2 2 4-4" />
  </svg>
);
export default SvgBasketCheck;
