import * as React from "react";
import type { SVGProps } from "react";
const SvgPray = ({
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
    className="icon icon-tabler icon-tabler-pray"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 20h8l-4-4V9l4 3 2-2" />
  </svg>
);
export default SvgPray;
