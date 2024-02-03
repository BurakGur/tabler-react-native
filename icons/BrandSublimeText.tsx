import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSublimeText = ({
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
    className="icon icon-tabler icon-tabler-brand-sublime-text"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 8 5 12.5V7l14-4.5zM19 17 5 21.5V16l14-4.5zM19 11.5 5 7M5 12.5 19 17" />
  </svg>
);
export default SvgBrandSublimeText;
