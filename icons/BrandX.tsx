import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandX = ({
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
    className="icon icon-tabler icon-tabler-brand-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m4 4 11.733 16H20L8.267 4zM4 20l6.768-6.768m2.46-2.46L20 4" />
  </svg>
);
export default SvgBrandX;
