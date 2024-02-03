import * as React from "react";
import type { SVGProps } from "react";
const SvgGripHorizontal = ({
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
    className="icon icon-tabler icon-tabler-grip-horizontal"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgGripHorizontal;
