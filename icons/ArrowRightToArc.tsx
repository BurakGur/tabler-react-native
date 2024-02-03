import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightToArc = ({
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
    className="icon icon-tabler icon-tabler-arrow-right-to-arc"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12h12M11 8l4 4-4 4" />
    <path d="M12 21a9 9 0 0 0 0-18" />
  </svg>
);
export default SvgArrowRightToArc;
