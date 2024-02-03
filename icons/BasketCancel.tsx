import * as React from "react";
import type { SVGProps } from "react";
const SvgBasketCancel = ({
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
    className="icon icon-tabler icon-tabler-basket-cancel"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17 10-2-6M7 10l2-6M12 20H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H19a2 2 0 0 1 1.977 2.304l-.3 1.713" />
    <path d="M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0M17 21l4-4" />
  </svg>
);
export default SvgBasketCancel;
