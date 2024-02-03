import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationPause = ({
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
    className="icon icon-tabler icon-tabler-location-pause"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.02 20.04 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.634 10.062M17 17v5M21 17v5" />
  </svg>
);
export default SvgLocationPause;
