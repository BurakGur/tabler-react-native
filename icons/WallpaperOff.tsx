import * as React from "react";
import type { SVGProps } from "react";
const SvgWallpaperOff = ({
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
    className="icon icon-tabler icon-tabler-wallpaper-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409A2 2 0 0 1 18 20H6" />
    <path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M8 18V8M4.573 4.598A2 2 0 0 0 4 6v12M3 3l18 18" />
  </svg>
);
export default SvgWallpaperOff;
