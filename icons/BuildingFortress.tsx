import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingFortress = ({
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
    className="icon icon-tabler icon-tabler-building-fortress"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 21h1a1 1 0 0 0 1-1v-1h0a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1-1V5l-3-2-3 2v6h-4V5L7 3 4 5v15a1 1 0 0 0 1 1h2m8-2v1a1 1 0 0 0 1 1h2M7 7v.01M7 10v.01M7 13v.01M17 7v.01M17 10v.01M17 13v.01" />
  </svg>
);
export default SvgBuildingFortress;
