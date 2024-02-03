import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinOff = ({
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
    className="icon icon-tabler icon-tabler-map-pin-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.442 9.432a3 3 0 0 0 4.113 4.134M15 11a3 3 0 0 0-3-3" />
    <path d="M17.152 17.162 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 0 1-.476-10.794m2.18-1.82a8.003 8.003 0 0 1 10.91 10.912M3 3l18 18" />
  </svg>
);
export default SvgMapPinOff;
