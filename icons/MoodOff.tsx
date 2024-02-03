import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodOff = ({
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
    className="icon icon-tabler icon-tabler-mood-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.634 5.638a9 9 0 0 0 12.732 12.724m1.679-2.322A9 9 0 0 0 7.965 3.954M9 10h.01M15 10h.01" />
    <path d="M9.5 15a3.5 3.5 0 0 0 5 0M3 3l18 18" />
  </svg>
);
export default SvgMoodOff;
