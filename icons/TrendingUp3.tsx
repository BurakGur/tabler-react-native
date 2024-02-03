import * as React from "react";
import type { SVGProps } from "react";
const SvgTrendingUp3 = ({
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
    className="icon icon-tabler icon-tabler-trending-up-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m18 5 3 3-3 3" />
    <path d="M3 18h2.397a5 5 0 0 0 4.096-2.133l4.014-5.734A5 5 0 0 1 17.603 8H21" />
  </svg>
);
export default SvgTrendingUp3;
