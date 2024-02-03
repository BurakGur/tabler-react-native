import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationSearch = ({
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
    className="icon icon-tabler icon-tabler-location-search"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m11 16-1-2-7-3.5a.55.55 0 0 1 0-1L21 3l-2.916 8.076M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22" />
  </svg>
);
export default SvgLocationSearch;
