import * as React from "react";
import type { SVGProps } from "react";
const SvgWallpaper = ({
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
    className="icon icon-tabler icon-tabler-wallpaper"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6" />
    <path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M8 18V6a2 2 0 1 0-4 0v12" />
  </svg>
);
export default SvgWallpaper;
