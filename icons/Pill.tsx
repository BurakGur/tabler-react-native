import * as React from "react";
import type { SVGProps } from "react";
const SvgPill = ({
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
    className="icon icon-tabler icon-tabler-pill"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m4.5 12.5 8-8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1-7-7M8.5 8.5l7 7" />
  </svg>
);
export default SvgPill;
