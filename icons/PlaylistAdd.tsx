import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylistAdd = ({
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
    className="icon icon-tabler icon-tabler-playlist-add"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 8H5M5 12h9M11 16H5M15 16h6M18 13v6" />
  </svg>
);
export default SvgPlaylistAdd;
