import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsRightDown = ({
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
    className="icon icon-tabler icon-tabler-arrows-right-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 17 4 4 4-4" />
    <path d="M7 21V10a3 3 0 0 1 3-3h11" />
    <path d="m17 11 4-4-4-4" />
  </svg>
);
export default SvgArrowsRightDown;
