import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkEdit = ({
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
    className="icon icon-tabler icon-tabler-bookmark-edit"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 17-6 4V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4M18.42 15.61a2.1 2.1 0 1 1 2.97 2.97L18 22h-3v-3z" />
  </svg>
);
export default SvgBookmarkEdit;
