import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingCarousel = ({
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
    className="icon icon-tabler icon-tabler-building-carousel"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0" />
    <path d="M3 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M8 22l4-10 4 10" />
  </svg>
);
export default SvgBuildingCarousel;
