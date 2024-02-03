import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomPan = ({
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
    className="icon icon-tabler icon-tabler-zoom-pan"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M17 17l-2.5-2.5M10 5l2-2 2 2M19 10l2 2-2 2M5 10l-2 2 2 2M10 19l2 2 2-2" />
  </svg>
);
export default SvgZoomPan;
