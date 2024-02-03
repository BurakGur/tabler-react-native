import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBarBoth = ({
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
    className="icon icon-tabler icon-tabler-arrow-bar-both"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 12H2M5 15l-3-3 3-3M22 12h-6M19 15l3-3-3-3M12 4v16" />
  </svg>
);
export default SvgArrowBarBoth;
