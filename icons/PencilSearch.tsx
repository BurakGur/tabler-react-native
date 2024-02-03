import * as React from "react";
import type { SVGProps } from "react";
const SvgPencilSearch = ({
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
    className="icon icon-tabler icon-tabler-pencil-search"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17 11 1.5-1.5a2.828 2.828 0 1 0-4-4L4 16v4h4l3-3M13.5 6.5l4 4M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22" />
  </svg>
);
export default SvgPencilSearch;
