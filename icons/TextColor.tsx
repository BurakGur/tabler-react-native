import * as React from "react";
import type { SVGProps } from "react";
const SvgTextColor = ({
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
    className="icon icon-tabler icon-tabler-text-color"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 15V8a3 3 0 0 1 6 0v7M9 11h6M5 19h14" />
  </svg>
);
export default SvgTextColor;
