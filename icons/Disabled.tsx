import * as React from "react";
import type { SVGProps } from "react";
const SvgDisabled = ({
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
    className="icon icon-tabler icon-tabler-disabled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M11 7v8h4l4 5M11 11h5M7 11.5a5 5 0 1 0 6 7.5" />
  </svg>
);
export default SvgDisabled;
