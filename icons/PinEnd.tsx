import * as React from "react";
import type { SVGProps } from "react";
const SvgPinEnd = ({
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
    className="icon icon-tabler icon-tabler-pin-end"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 11V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9M17 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M10 13V9h4M14 13l-4-4" />
  </svg>
);
export default SvgPinEnd;
