import * as React from "react";
import type { SVGProps } from "react";
const SvgTransform = ({
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
    className="icon icon-tabler icon-tabler-transform"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0M21 11V8a2 2 0 0 0-2-2h-6l3 3m0-6-3 3M3 13v3a2 2 0 0 0 2 2h6l-3-3m0 6 3-3M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
  </svg>
);
export default SvgTransform;
