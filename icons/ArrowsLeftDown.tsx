import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsLeftDown = ({
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
    className="icon icon-tabler icon-tabler-arrows-left-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 3 3 7l4 4" />
    <path d="M3 7h11a3 3 0 0 1 3 3v11" />
    <path d="m13 17 4 4 4-4" />
  </svg>
);
export default SvgArrowsLeftDown;
