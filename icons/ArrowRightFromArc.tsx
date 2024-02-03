import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightFromArc = ({
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
    className="icon icon-tabler icon-tabler-arrow-right-from-arc"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 12H3M7 8l-4 4 4 4M12 21a9 9 0 0 0 0-18" />
  </svg>
);
export default SvgArrowRightFromArc;
