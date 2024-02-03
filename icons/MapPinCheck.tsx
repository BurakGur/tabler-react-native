import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinCheck = ({
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
    className="icon icon-tabler icon-tabler-map-pin-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    <path d="M11.87 21.48a2 2 0 0 1-1.283-.58l-4.244-4.243a8 8 0 1 1 13.355-3.474M15 19l2 2 4-4" />
  </svg>
);
export default SvgMapPinCheck;
