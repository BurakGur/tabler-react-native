import * as React from "react";
import type { SVGProps } from "react";
const SvgBrain = ({
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
    className="icon icon-tabler icon-tabler-brain"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15.5 13a3.5 3.5 0 0 0-3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-7 0v-1.8" />
    <path d="M17.5 16a3.5 3.5 0 0 0 0-7H17" />
    <path d="M19 9.3V6.5a3.5 3.5 0 0 0-7 0M6.5 16a3.5 3.5 0 0 1 0-7H7" />
    <path d="M5 9.3V6.5a3.5 3.5 0 0 1 7 0v10" />
  </svg>
);
export default SvgBrain;
