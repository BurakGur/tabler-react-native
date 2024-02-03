import * as React from "react";
import type { SVGProps } from "react";
const SvgEaseOut = ({
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
    className="icon icon-tabler icon-tabler-ease-out"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 20S13 4 21 4" />
  </svg>
);
export default SvgEaseOut;
