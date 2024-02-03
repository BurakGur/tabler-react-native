import * as React from "react";
import type { SVGProps } from "react";
const SvgCpu2 = ({
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
    className="icon icon-tabler icon-tabler-cpu-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
    <path d="M8 10V8h2m6 6v2h-2m-4 0H8v-2m8-4V8h-2M3 10h2M3 14h2M10 3v2M14 3v2M21 10h-2M21 14h-2M14 21v-2M10 21v-2" />
  </svg>
);
export default SvgCpu2;
