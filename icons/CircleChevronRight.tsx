import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleChevronRight = ({
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
    className="icon icon-tabler icon-tabler-circle-chevron-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m11 9 3 3-3 3" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
  </svg>
);
export default SvgCircleChevronRight;
