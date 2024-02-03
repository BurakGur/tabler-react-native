import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarks = ({
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
    className="icon icon-tabler icon-tabler-bookmarks"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 10v11l-5-3-5 3V10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3" />
    <path d="M11 3h5a3 3 0 0 1 3 3v11" />
  </svg>
);
export default SvgBookmarks;
