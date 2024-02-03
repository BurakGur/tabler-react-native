import * as React from "react";
import type { SVGProps } from "react";
const SvgResize = ({
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
    className="icon icon-tabler icon-tabler-resize"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 11v8a1 1 0 0 0 1 1h8M4 6V5a1 1 0 0 1 1-1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1-1 1h-1" />
    <path d="M4 12h7a1 1 0 0 1 1 1v7" />
  </svg>
);
export default SvgResize;
