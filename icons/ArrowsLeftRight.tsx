import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsLeftRight = ({
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
    className="icon icon-tabler icon-tabler-arrows-left-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 17H3M6 10 3 7l3-3M3 7h18M18 20l3-3-3-3" />
  </svg>
);
export default SvgArrowsLeftRight;
