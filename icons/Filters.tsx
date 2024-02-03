import * as React from "react";
import type { SVGProps } from "react";
const SvgFilters = ({
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
    className="icon icon-tabler icon-tabler-filters"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8" />
    <path d="M8 11a5 5 0 1 0 3.998 1.997" />
    <path d="M12.002 19.003A5 5 0 1 0 16 11" />
  </svg>
);
export default SvgFilters;
