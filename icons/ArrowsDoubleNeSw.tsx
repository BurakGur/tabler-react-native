import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDoubleNeSw = ({
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
    className="icon icon-tabler icon-tabler-arrows-double-ne-sw"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 14 14 3M10 3h4v4M10 17v4h4M21 10 10 21" />
  </svg>
);
export default SvgArrowsDoubleNeSw;
