import * as React from "react";
import type { SVGProps } from "react";
const SvgMusic = ({
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
    className="icon icon-tabler icon-tabler-music"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M13 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    <path d="M9 17V4h10v13M9 8h10" />
  </svg>
);
export default SvgMusic;
