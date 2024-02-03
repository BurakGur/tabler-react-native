import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingChurch = ({
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
    className="icon icon-tabler icon-tabler-building-church"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 21h18M10 21v-4a2 2 0 0 1 4 0v4M10 5h4M12 3v5" />
    <path d="M6 21v-7m-2 2 8-8 8 8m-2-2v7" />
  </svg>
);
export default SvgBuildingChurch;
