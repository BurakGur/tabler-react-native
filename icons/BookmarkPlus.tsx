import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkPlus = ({
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
    className="icon icon-tabler icon-tabler-bookmark-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 17-6 4V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v5M16 19h6M19 16v6" />
  </svg>
);
export default SvgBookmarkPlus;
