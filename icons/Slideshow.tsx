import * as React from "react";
import type { SVGProps } from "react";
const SvgSlideshow = ({
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
    className="icon icon-tabler icon-tabler-slideshow"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 6h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
    <path d="m3 13 4-4a3 5 0 0 1 3 0l4 4" />
    <path d="m13 12 2-2a3 5 0 0 1 3 0l3 3M8 21h.01M12 21h.01M16 21h.01" />
  </svg>
);
export default SvgSlideshow;
