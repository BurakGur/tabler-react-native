import * as React from "react";
import type { SVGProps } from "react";
const SvgFavicon = ({
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
    className="icon icon-tabler icon-tabler-favicon"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zM6 10v4" />
    <path d="M11 10a2 2 0 1 0 0 4M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </svg>
);
export default SvgFavicon;
