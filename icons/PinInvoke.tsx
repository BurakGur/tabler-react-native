import * as React from "react";
import type { SVGProps } from "react";
const SvgPinInvoke = ({
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
    className="icon icon-tabler icon-tabler-pin-invoke"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 13v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9M17 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M10 11h4v4M10 15l4-4" />
  </svg>
);
export default SvgPinInvoke;
