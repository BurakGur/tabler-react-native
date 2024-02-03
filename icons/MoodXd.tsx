import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodXd = ({
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
    className="icon icon-tabler icon-tabler-mood-xd"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
    <path d="M9 14h6a3 3 0 0 1-6 0M9 8l6 3M9 11l6-3" />
  </svg>
);
export default SvgMoodXd;
