import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsUpRight = ({
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
    className="icon icon-tabler icon-tabler-arrows-up-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17 21 4-4-4-4" />
    <path d="M21 17H10a3 3 0 0 1-3-3V3" />
    <path d="M11 7 7 3 3 7" />
  </svg>
);
export default SvgArrowsUpRight;
