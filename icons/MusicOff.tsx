import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicOff = ({
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
    className="icon icon-tabler icon-tabler-music-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14.42 14.45a3 3 0 1 0 4.138 4.119M9 17V9m0-4V4h10v11M12 8h7M3 3l18 18" />
  </svg>
);
export default SvgMusicOff;
