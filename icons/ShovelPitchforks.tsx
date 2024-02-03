import * as React from "react";
import type { SVGProps } from "react";
const SvgShovelPitchforks = ({
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
    className="icon icon-tabler icon-tabler-shovel-pitchforks"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 3h4M7 3v12M4 15h6v3a3 3 0 0 1-6 0zM14 21v-3a3 3 0 0 1 6 0v3M17 21V3" />
  </svg>
);
export default SvgShovelPitchforks;
