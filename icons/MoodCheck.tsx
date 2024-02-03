import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodCheck = ({
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
    className="icon icon-tabler icon-tabler-mood-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.925 13.163A8.998 8.998 0 0 0 12 3a9 9 0 0 0 0 18M9 10h.01M15 10h.01" />
    <path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1M15 19l2 2 4-4" />
  </svg>
);
export default SvgMoodCheck;
