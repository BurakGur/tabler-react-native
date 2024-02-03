import * as React from "react";
import type { SVGProps } from "react";
const SvgCpuOff = ({
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
    className="icon icon-tabler icon-tabler-cpu-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706A1 1 0 0 1 18 19H6a1 1 0 0 1-1-1V6c0-.272.108-.518.284-.698" />
    <path d="M13 9h2v2m0 4H9V9M3 10h2M3 14h2M10 3v2M14 3v2M21 10h-2M21 14h-2M14 21v-2M10 21v-2M3 3l18 18" />
  </svg>
);
export default SvgCpuOff;
