import * as React from "react";
import type { SVGProps } from "react";
const SvgPlug = ({
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
    className="icon icon-tabler icon-tabler-plug"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.785 6 18 14.215l-2.054 2.054a5.81 5.81 0 1 1-8.215-8.215zM4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5" />
  </svg>
);
export default SvgPlug;
