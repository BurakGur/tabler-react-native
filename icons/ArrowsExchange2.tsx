import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsExchange2 = ({
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
    className="icon icon-tabler icon-tabler-arrows-exchange-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 10H3l4-4M7 14h14l-4 4" />
  </svg>
);
export default SvgArrowsExchange2;
