import * as React from "react";
import type { SVGProps } from "react";
const SvgGlassChampagne = ({
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
    className="icon icon-tabler icon-tabler-glass-champagne"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 21h6M12 16v5M8 5a4 2 0 1 0 8 0 4 2 0 1 0-8 0" />
    <path d="M8 5c0 6.075 1.79 11 4 11s4-4.925 4-11" />
  </svg>
);
export default SvgGlassChampagne;
