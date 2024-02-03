import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleChevronsRight = ({
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
    className="icon icon-tabler icon-tabler-circle-chevrons-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 9 3 3-3 3M13 9l3 3-3 3" />
    <path d="M3 12a9 9 0 1 0 0-.265z" />
  </svg>
);
export default SvgCircleChevronsRight;
