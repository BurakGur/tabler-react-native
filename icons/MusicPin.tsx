import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicPin = ({
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
    className="icon icon-tabler icon-tabler-music-pin"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M9 17V4h10v7M9 8h10M21.121 20.121a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01" />
  </svg>
);
export default SvgMusicPin;
