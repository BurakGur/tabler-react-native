import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeSearch = ({
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
    className="icon icon-tabler icon-tabler-home-search"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h4.7" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22" />
  </svg>
);
export default SvgHomeSearch;
