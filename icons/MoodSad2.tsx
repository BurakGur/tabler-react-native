import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodSad2 = ({
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
    className="icon icon-tabler icon-tabler-mood-sad-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M14.5 16.05a3.5 3.5 0 0 0-5 0M10 9.25c-.5 1-2.5 1-3 0M17 9.25c-.5 1-2.5 1-3 0" />
  </svg>
);
export default SvgMoodSad2;
