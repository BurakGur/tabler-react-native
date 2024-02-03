import * as React from "react";
import type { SVGProps } from "react";
const SvgSTurnLeft = ({
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
    className="icon icon-tabler icon-tabler-s-turn-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    <path d="M17 5H7.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7H3" />
    <path d="m6 16-3 3 3 3" />
  </svg>
);
export default SvgSTurnLeft;
