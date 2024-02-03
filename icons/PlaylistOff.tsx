import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylistOff = ({
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
    className="icon icon-tabler icon-tabler-playlist-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 14a3 3 0 1 0 3 3M17 13V4h4M13 5H9M5 5H3M3 9h6M9 13H3M3 3l18 18" />
  </svg>
);
export default SvgPlaylistOff;
