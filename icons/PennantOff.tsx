import * as React from "react";
import type { SVGProps } from "react";
const SvgPennantOff = ({
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
    className="icon icon-tabler icon-tabler-pennant-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 21h4M10 21V10m0-4V3M10 4l9 4-4.858 2.16m-2.764 1.227L10 12M3 3l18 18" />
  </svg>
);
export default SvgPennantOff;
