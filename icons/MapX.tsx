import * as React from "react";
import type { SVGProps } from "react";
const SvgMapX = ({
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
    className="icon icon-tabler icon-tabler-map-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 19.5 9 17l-6 3V7l6-3 6 3 6-3v9M9 4v13M15 7v6.5M22 22l-5-5M17 22l5-5" />
  </svg>
);
export default SvgMapX;
