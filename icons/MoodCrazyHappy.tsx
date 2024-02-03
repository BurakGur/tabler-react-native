import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodCrazyHappy = ({
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
    className="icon icon-tabler icon-tabler-mood-crazy-happy"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M7 8.5l3 3M7 11.5l3-3M14 8.5l3 3M14 11.5l3-3" />
    <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  </svg>
);
export default SvgMoodCrazyHappy;
