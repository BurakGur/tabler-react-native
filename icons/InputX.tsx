import * as React from "react";
import type { SVGProps } from "react";
const SvgInputX = ({
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
    className="icon icon-tabler icon-tabler-input-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 13V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7M22 22l-5-5M17 22l5-5" />
  </svg>
);
export default SvgInputX;
