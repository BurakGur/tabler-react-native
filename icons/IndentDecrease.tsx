import * as React from "react";
import type { SVGProps } from "react";
const SvgIndentDecrease = ({
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
    className="icon icon-tabler icon-tabler-indent-decrease"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 6h-7M20 12h-9M20 18h-7M8 8l-4 4 4 4" />
  </svg>
);
export default SvgIndentDecrease;
