import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodPlus = ({
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
    className="icon icon-tabler icon-tabler-mood-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.985 12.528a9 9 0 1 0-8.45 8.456M16 19h6M19 16v6M9 10h.01M15 10h.01" />
    <path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1" />
  </svg>
);
export default SvgMoodPlus;
