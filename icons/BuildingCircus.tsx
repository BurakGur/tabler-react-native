import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingCircus = ({
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
    className="icon icon-tabler icon-tabler-building-circus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 11h16M12 6.5c0 1-5 4.5-8 4.5M12 6.5c0 1 5 4.5 8 4.5M6 11q-.5 8-2 10h4c1 0 4-4 4-9v-1M18 11q.5 8 2 10h-4c-1 0-4-4-4-9v-1" />
    <path d="M12 7V3l2 1h-2" />
  </svg>
);
export default SvgBuildingCircus;
