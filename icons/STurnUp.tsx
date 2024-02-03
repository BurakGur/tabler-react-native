import * as React from "react";
import type { SVGProps } from "react";
const SvgSTurnUp = ({
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
    className="icon icon-tabler icon-tabler-s-turn-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
    <path d="M5 17V7.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0V3" />
    <path d="m16 6 3-3 3 3" />
  </svg>
);
export default SvgSTurnUp;
