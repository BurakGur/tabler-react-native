import * as React from "react";
import type { SVGProps } from "react";
const SvgTagOff = ({
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
    className="icon icon-tabler icon-tabler-tag-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7.149 7.144A.498.498 0 0 0 7.5 8a.5.5 0 0 0 .341-.135" />
    <path d="M3.883 3.875A3 3 0 0 0 3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0L17.5 17.5m2.005-2.005.79-.79a2.41 2.41 0 0 0 0-3.41l-7.71-7.71A2 2 0 0 0 11.173 3H7M3 3l18 18" />
  </svg>
);
export default SvgTagOff;
