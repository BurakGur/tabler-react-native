import * as React from "react";
import type { SVGProps } from "react";
const SvgBrushOff = ({
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
    className="icon icon-tabler icon-tabler-brush-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 17a4 4 0 1 1 4 4H3z" />
    <path d="M21 3a16 16 0 0 0-9.309 4.704M9.896 9.916A16 16 0 0 0 8.2 13.2M21 3a16 16 0 0 1-4.697 9.302m-2.195 1.786A16 16 0 0 1 10.8 15.8M3 3l18 18" />
  </svg>
);
export default SvgBrushOff;
