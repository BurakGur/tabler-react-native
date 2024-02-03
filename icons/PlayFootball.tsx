import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayFootball = ({
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
    className="icon icon-tabler icon-tabler-play-football"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 17l5 1 .75-1.5M14 21v-4l-4-3 1-6" />
    <path d="M6 12V9l5-1 3 3 3 1" />
    <path fill="currentColor" d="M19.5 20a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
  </svg>
);
export default SvgPlayFootball;
