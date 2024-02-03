import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodUnamused = ({
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
    className="icon icon-tabler icon-tabler-mood-unamused"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M11 16l4-1.5" />
    <path d="M10 10c-.5-1-2.5-1-3 0M17 10c-.5-1-2.5-1-3 0" />
  </svg>
);
export default SvgMoodUnamused;
