import * as React from "react";
import type { SVGProps } from "react";
const SvgColorFilter = ({
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
    className="icon icon-tabler icon-tabler-color-filter"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.58 13.79c.27.68.42 1.43.42 2.21 0 1.77-.77 3.37-2 4.46A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6 0-2.76 1.88-5.1 4.42-5.79" />
    <path d="M17.58 10.21C20.12 10.9 22 13.24 22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54" />
    <path d="M6 8a6 6 0 1 0 12 0A6 6 0 1 0 6 8" />
  </svg>
);
export default SvgColorFilter;
