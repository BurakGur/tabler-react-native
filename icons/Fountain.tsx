import * as React from "react";
import type { SVGProps } from "react";
const SvgFountain = ({
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
    className="icon icon-tabler icon-tabler-fountain"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 16v-5a2 2 0 1 0-4 0M15 16v-5a2 2 0 1 1 4 0" />
    <path d="M12 16V6a3 3 0 0 1 6 0M6 6a3 3 0 0 1 6 0M3 16h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
  </svg>
);
export default SvgFountain;
