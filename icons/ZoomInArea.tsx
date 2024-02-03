import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomInArea = ({
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
    className="icon icon-tabler icon-tabler-zoom-in-area"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 13v4M13 15h4M10 15a5 5 0 1 0 10 0 5 5 0 1 0-10 0M22 22l-3-3M6 18H5a2 2 0 0 1-2-2v-1M3 11v-1M3 6V5a2 2 0 0 1 2-2h1M10 3h1M15 3h1a2 2 0 0 1 2 2v1" />
  </svg>
);
export default SvgZoomInArea;
