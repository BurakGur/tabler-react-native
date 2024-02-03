import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandWordpress = ({
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
    className="icon icon-tabler icon-tabler-brand-wordpress"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.5 9h3M4 9h2.5M11 9l3 11 4-9M5.5 9 9 20l3-7M18 11c.177-.528 1-1.364 1-2.5 0-1.78-.776-2.5-1.875-2.5C16.227 6 16 6.812 16 7.429c0 1.83 2 2.058 2 3.571" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
  </svg>
);
export default SvgBrandWordpress;
