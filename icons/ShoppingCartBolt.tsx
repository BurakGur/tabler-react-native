import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCartBolt = ({
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
    className="icon icon-tabler icon-tabler-shopping-cart-bolt"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <path d="M13.5 17H6V3H4" />
    <path d="m6 5 14 1-.858 6.004M16.5 13H6M19 16l-2 3h4l-2 3" />
  </svg>
);
export default SvgShoppingCartBolt;
