import * as React from "react";
import type { SVGProps } from "react";
const SvgStretching = ({
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
    className="icon icon-tabler icon-tabler-stretching"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5 20l5-.5 1-2M18 20v-5h-5.5L15 8.5l-5.5 1 1.5 2" />
  </svg>
);
export default SvgStretching;
