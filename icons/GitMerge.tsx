import * as React from "react";
import type { SVGProps } from "react";
const SvgGitMerge = ({
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
    className="icon icon-tabler icon-tabler-git-merge"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 8v8" />
    <path d="M7 8a4 4 0 0 0 4 4h4" />
  </svg>
);
export default SvgGitMerge;
