import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationX = ({
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
    className="icon icon-tabler icon-tabler-location-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m13.5 21-.224-.448L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.622 10.03M22 22l-5-5M17 22l5-5" />
  </svg>
);
export default SvgLocationX;
