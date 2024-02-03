import * as React from "react";
import type { SVGProps } from "react";
const SvgLockSearch = ({
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
    className="icon icon-tabler icon-tabler-lock-search"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.5 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10M8 11V7a4 4 0 1 1 8 0v4M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22" />
  </svg>
);
export default SvgLockSearch;
