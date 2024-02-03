import * as React from "react";
import type { SVGProps } from "react";
const SvgFishHookOff = ({
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
    className="icon icon-tabler icon-tabler-fish-hook-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 9v3m-.085 3.924A5 5 0 0 1 6 15v-4l3 3M14 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 5V3M3 3l18 18" />
  </svg>
);
export default SvgFishHookOff;
