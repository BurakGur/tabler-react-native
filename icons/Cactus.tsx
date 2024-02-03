import * as React from "react";
import type { SVGProps } from "react";
const SvgCactus = ({
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
    className="icon icon-tabler icon-tabler-cactus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 9v1a3 3 0 0 0 3 3h1M18 8v5a3 3 0 0 1-3 3h-1M10 21V5a2 2 0 1 1 4 0v16M7 21h10" />
  </svg>
);
export default SvgCactus;
