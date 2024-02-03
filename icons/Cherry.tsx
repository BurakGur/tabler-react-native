import * as React from "react";
import type { SVGProps } from "react";
const SvgCherry = ({
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
    className="icon icon-tabler icon-tabler-cherry"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M14 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M9 13c.366-2 1.866-3.873 4.5-5.6M17 15c-1.333-2.333-2.333-5.333-1-9" />
    <path d="M5 6q5.5-4 11 0-5.5 4-11 0" />
  </svg>
);
export default SvgCherry;
