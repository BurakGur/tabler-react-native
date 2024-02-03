import * as React from "react";
import type { SVGProps } from "react";
const SvgRainbow = ({
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
    className="icon icon-tabler icon-tabler-rainbow"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M22 17c0-5.523-4.477-10-10-10S2 11.477 2 17" />
    <path d="M18 17a6 6 0 1 0-12 0" />
    <path d="M14 17a2 2 0 1 0-4 0" />
  </svg>
);
export default SvgRainbow;
