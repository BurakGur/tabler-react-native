import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCartDown = ({
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
    className="icon icon-tabler icon-tabler-shopping-cart-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <path d="M12.5 17H6V3H4" />
    <path d="m6 5 14 1-.859 6.011M16.5 13H6M19 16v6M22 19l-3 3-3-3" />
  </svg>
);
export default SvgShoppingCartDown;
