import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsUpLeft = ({
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
    className="icon icon-tabler icon-tabler-arrows-up-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m21 7-4-4-4 4" />
    <path d="M17 3v11a3 3 0 0 1-3 3H3" />
    <path d="m7 13-4 4 4 4" />
  </svg>
);
export default SvgArrowsUpLeft;
