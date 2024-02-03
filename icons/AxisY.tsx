import * as React from "react";
import type { SVGProps } from "react";
const SvgAxisY = ({
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
    className="icon icon-tabler icon-tabler-axis-y"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 20h-.01M15 20h-.01M19 20h-.01M4 7l3-3 3 3M7 20V4" />
  </svg>
);
export default SvgAxisY;
