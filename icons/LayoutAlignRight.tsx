import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutAlignRight = ({
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
    className="icon icon-tabler icon-tabler-layout-align-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 4v16M4 11a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
  </svg>
);
export default SvgLayoutAlignRight;
