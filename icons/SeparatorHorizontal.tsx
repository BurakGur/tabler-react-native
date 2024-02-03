import * as React from "react";
import type { SVGProps } from "react";
const SvgSeparatorHorizontal = ({
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
    className="icon icon-tabler icon-tabler-separator-horizontal"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 12h16M8 8l4-4 4 4M16 16l-4 4-4-4" />
  </svg>
);
export default SvgSeparatorHorizontal;
