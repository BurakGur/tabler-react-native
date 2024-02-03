import * as React from "react";
import type { SVGProps } from "react";
const SvgSTurnDown = ({
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
    className="icon icon-tabler icon-tabler-s-turn-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    <path d="M5 7v9.5a3.5 3.5 0 0 0 7 0v-9a3.5 3.5 0 0 1 7 0V21" />
    <path d="m16 18 3 3 3-3" />
  </svg>
);
export default SvgSTurnDown;
