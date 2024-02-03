import * as React from "react";
import type { SVGProps } from "react";
const SvgTrendingUp2 = ({
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
    className="icon icon-tabler icon-tabler-trending-up-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m18 5 3 3-3 3" />
    <path d="M3 18h5l7-10h6" />
  </svg>
);
export default SvgTrendingUp2;
