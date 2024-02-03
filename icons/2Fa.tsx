import * as React from "react";
import type { SVGProps } from "react";
const Svg2Fa = ({
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
    className="icon icon-tabler icon-tabler-2fa"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 16H3l3.47-4.66A2 2 0 1 0 3 9.8M10 16V8h4M10 12h3M17 16v-6a2 2 0 0 1 4 0v6M17 13h4" />
  </svg>
);
export default Svg2Fa;
