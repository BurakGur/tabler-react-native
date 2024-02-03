import * as React from "react";
import type { SVGProps } from "react";
const SvgFall = ({
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
    className="icon icon-tabler icon-tabler-fall"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m11 21 1-5-1-4-3-4h4l3-3M6 16l-1-4 3-4M5 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M13.5 12H16l4 2" />
  </svg>
);
export default SvgFall;
