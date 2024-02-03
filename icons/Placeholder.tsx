import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaceholder = ({
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
    className="icon icon-tabler icon-tabler-placeholder"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 20.415A8 8 0 1 0 13 5h-3" />
    <path d="m13 8-3-3 3-3M7 17l4-4-4-4-4 4z" />
  </svg>
);
export default SvgPlaceholder;
