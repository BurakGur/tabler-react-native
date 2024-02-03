import * as React from "react";
import type { SVGProps } from "react";
const SvgTrendingDown = ({
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
    className="icon icon-tabler icon-tabler-trending-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 7 6 6 4-4 8 8" />
    <path d="M21 10v7h-7" />
  </svg>
);
export default SvgTrendingDown;
