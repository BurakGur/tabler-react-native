import * as React from "react";
import type { SVGProps } from "react";
const SvgCandle = ({
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
    className="icon icon-tabler icon-tabler-candle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 21h6v-9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zM12 3l1.465 1.638a2 2 0 1 1-3.015.099z" />
  </svg>
);
export default SvgCandle;
