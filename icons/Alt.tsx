import * as React from "react";
import type { SVGProps } from "react";
const SvgAlt = ({
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
    className="icon icon-tabler icon-tabler-alt"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 16v-6a2 2 0 1 1 4 0v6M4 13h4M11 8v8h4M16 8h4M18 8v8" />
  </svg>
);
export default SvgAlt;
