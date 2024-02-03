import * as React from "react";
import type { SVGProps } from "react";
const SvgToolsKitchen3 = ({
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
    className="icon icon-tabler icon-tabler-tools-kitchen-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 4v17M4 4v3a3 3 0 1 0 6 0V4M14 8a3 4 0 1 0 6 0 3 4 0 1 0-6 0M17 12v9" />
  </svg>
);
export default SvgToolsKitchen3;
