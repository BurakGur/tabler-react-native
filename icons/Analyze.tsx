import * as React from "react";
import type { SVGProps } from "react";
const SvgAnalyze = ({
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
    className="icon icon-tabler icon-tabler-analyze"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 11a8.1 8.1 0 0 0-6.986-6.918A8.1 8.1 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 15 3" />
    <path d="M18 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </svg>
);
export default SvgAnalyze;
