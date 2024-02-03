import * as React from "react";
import type { SVGProps } from "react";
const SvgTent = ({
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
    className="icon icon-tabler icon-tabler-tent"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m11 14 4 6h6L12 4 3 20h6l4-6" />
  </svg>
);
export default SvgTent;
