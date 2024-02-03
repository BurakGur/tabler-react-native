import * as React from "react";
import type { SVGProps } from "react";
const SvgCoffin = ({
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
    className="icon icon-tabler icon-tabler-coffin"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 3 5 9l2 12h6l2-12-2-6zM10 7v5M8 9h4" />
    <path d="M13 21h4l2-12-2-6h-4" />
  </svg>
);
export default SvgCoffin;
