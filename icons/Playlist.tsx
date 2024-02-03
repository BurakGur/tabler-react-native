import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylist = ({
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
    className="icon icon-tabler icon-tabler-playlist"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M17 17V4h4M13 5H3M3 9h10M9 13H3" />
  </svg>
);
export default SvgPlaylist;
