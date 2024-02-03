import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsSplit = ({
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
    className="icon icon-tabler icon-tabler-arrows-split"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 17h-8l-3.5-5H3M21 7h-8l-3.495 5" />
    <path d="m18 10 3-3-3-3M18 20l3-3-3-3" />
  </svg>
);
export default SvgArrowsSplit;
