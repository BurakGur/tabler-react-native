import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodTongueWink2 = ({
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
    className="icon icon-tabler icon-tabler-mood-tongue-wink-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M15 10h-.01" />
    <path d="M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7M7 10c.5-1 2.5-1 3 0" />
  </svg>
);
export default SvgMoodTongueWink2;
