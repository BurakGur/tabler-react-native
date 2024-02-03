import * as React from "react";
import type { SVGProps } from "react";
const SvgSortAscendingSmallBig = ({
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
    className="icon icon-tabler icon-tabler-sort-ascending-small-big"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m4 15 3 3 3-3M7 6v12M14 5.667c0-.369.298-.667.667-.667h2.666c.369 0 .667.298.667.667v2.666a.667.667 0 0 1-.667.667h-2.666A.667.667 0 0 1 14 8.333zM14 13.167c0-.645.522-1.167 1.167-1.167h4.666c.645 0 1.167.522 1.167 1.167v4.666c0 .645-.522 1.167-1.167 1.167h-4.666A1.167 1.167 0 0 1 14 17.833z" />
  </svg>
);
export default SvgSortAscendingSmallBig;
