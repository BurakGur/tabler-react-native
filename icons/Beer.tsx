import * as React from "react";
import type { SVGProps } from "react";
const SvgBeer = ({
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
    className="icon icon-tabler icon-tabler-beer"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 21h6a1 1 0 0 0 1-1v-3.625c0-1.397.29-2.775.845-4.025l.31-.7C17.711 10.4 18 9.397 18 8V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4c0 1.397.29 2.4.845 3.65l.31.7A9.9 9.9 0 0 1 8 16.375V20a1 1 0 0 0 1 1M6 8h12" />
  </svg>
);
export default SvgBeer;
