import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonalPrism = ({
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
    className="icon icon-tabler icon-tabler-hexagonal-prism"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m20.792 6.996-3.775 2.643A2 2 0 0 1 15.87 10H8.13c-.41 0-.81-.126-1.146-.362L3.21 6.997M8 10v11M16 10v11" />
    <path d="m3.853 18.274 3.367 2.363A2 2 0 0 0 8.367 21h7.265c.41 0 .811-.126 1.147-.363l3.367-2.363c.536-.375.854-.99.854-1.643V7.369c0-.655-.318-1.268-.853-1.643L16.78 3.363A2 2 0 0 0 15.633 3H8.367c-.41 0-.811.126-1.147.363L3.853 5.726A2 2 0 0 0 3 7.37v9.261c0 .655.318 1.269.853 1.644z" />
  </svg>
);
export default SvgHexagonalPrism;
