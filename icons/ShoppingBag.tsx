import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBag = ({
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
    className="icon icon-tabler icon-tabler-shopping-bag"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6.331 8H17.67a2 2 0 0 1 1.977 2.304l-1.255 8.152A3 3 0 0 1 15.426 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8" />
    <path d="M9 11V6a3 3 0 0 1 6 0v5" />
  </svg>
);
export default SvgShoppingBag;
