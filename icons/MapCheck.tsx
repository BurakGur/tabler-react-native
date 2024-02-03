import * as React from "react";
import type { SVGProps } from "react";
const SvgMapCheck = ({
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
    className="icon icon-tabler icon-tabler-map-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m11 18-2-1-6 3V7l6-3 6 3 6-3v9M9 4v13M15 7v8M15 19l2 2 4-4" />
  </svg>
);
export default SvgMapCheck;
