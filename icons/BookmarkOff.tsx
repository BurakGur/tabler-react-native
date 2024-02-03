import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkOff = ({
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
    className="icon icon-tabler icon-tabler-bookmark-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7.708 3.721A4 4 0 0 1 10 3h4a4 4 0 0 1 4 4v7m0 4v3l-6-4-6 4V7q.001-.463.1-.897M3 3l18 18" />
  </svg>
);
export default SvgBookmarkOff;
