import * as React from "react";
import type { SVGProps } from "react";
const SvgHighlight = ({
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
    className="icon icon-tabler icon-tabler-highlight"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 19h4L17.5 8.5a2.828 2.828 0 1 0-4-4L3 15zM12.5 5.5l4 4M4.5 13.5l4 4M21 15v4h-8l4-4z" />
  </svg>
);
export default SvgHighlight;
