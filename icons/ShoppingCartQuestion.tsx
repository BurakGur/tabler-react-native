import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCartQuestion = ({
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
    className="icon icon-tabler icon-tabler-shopping-cart-question"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <path d="M13.5 17H6V3H4" />
    <path d="m6 5 14 1-.714 5M14.5 13H6M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </svg>
);
export default SvgShoppingCartQuestion;
