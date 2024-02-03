import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsRandom = ({
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
    className="icon icon-tabler icon-tabler-arrows-random"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 21h-4v-4M16 21l5-5M6.5 9.504l-3.5-2L5 4M3 7.504l6.83-1.87M4 16l4-1 1 4M8 15l-3.5 6M21 5l-.5 4-4-.5M20.5 9 16 3.5" />
  </svg>
);
export default SvgArrowsRandom;
