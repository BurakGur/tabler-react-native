import * as React from "react";
import type { SVGProps } from "react";
const SvgBackground = ({
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
    className="icon icon-tabler icon-tabler-background"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m4 8 4-4M14 4 4 14M4 20 20 4M20 10 10 20M20 16l-4 4" />
  </svg>
);
export default SvgBackground;
