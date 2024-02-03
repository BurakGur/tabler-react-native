import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerRightDown = ({
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
    className="icon icon-tabler icon-tabler-corner-right-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 6h6a3 3 0 0 1 3 3v10l-4-4m8 0-4 4" />
  </svg>
);
export default SvgCornerRightDown;
