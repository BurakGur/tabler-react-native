import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCartOff = ({
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
    className="icon icon-tabler icon-tabler-shopping-cart-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 17a2 2 0 1 0 2 2" />
    <path d="M17 17H6V6M9.239 5.231 20 6l-1 7h-2m-4 0H6M3 3l18 18" />
  </svg>
);
export default SvgShoppingCartOff;
