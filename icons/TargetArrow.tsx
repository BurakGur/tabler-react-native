import * as React from "react";
import type { SVGProps } from "react";
const SvgTargetArrow = ({
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
    className="icon icon-tabler icon-tabler-target-arrow"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <path d="M12 7a5 5 0 1 0 5 5" />
    <path d="M13 3.055A9 9 0 1 0 20.941 11" />
    <path d="M15 6v3h3l3-3h-3V3zM15 9l-3 3" />
  </svg>
);
export default SvgTargetArrow;
