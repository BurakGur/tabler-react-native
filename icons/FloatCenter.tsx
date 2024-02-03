import * as React from "react";
import type { SVGProps } from "react";
const SvgFloatCenter = ({
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
    className="icon icon-tabler icon-tabler-float-center"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 7h1M4 11h1M19 7h1M19 11h1M4 15h16M4 19h16" />
  </svg>
);
export default SvgFloatCenter;
