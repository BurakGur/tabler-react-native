import * as React from "react";
import type { SVGProps } from "react";
const SvgPills = ({
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
    className="icon icon-tabler icon-tabler-pills"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 8a5 5 0 1 0 10 0A5 5 0 1 0 3 8M13 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0M4.5 4.5l7 7M19.5 14.5l-5 5" />
  </svg>
);
export default SvgPills;
