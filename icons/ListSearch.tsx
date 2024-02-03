import * as React from "react";
import type { SVGProps } from "react";
const SvgListSearch = ({
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
    className="icon icon-tabler icon-tabler-list-search"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0M18.5 18.5 21 21M4 6h16M4 12h4M4 18h4" />
  </svg>
);
export default SvgListSearch;
