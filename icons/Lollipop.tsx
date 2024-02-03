import * as React from "react";
import type { SVGProps } from "react";
const SvgLollipop = ({
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
    className="icon icon-tabler icon-tabler-lollipop"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
    <path d="M21 10a3.5 3.5 0 0 0-7 0M14 10a3.5 3.5 0 0 1-7 0M14 17a3.5 3.5 0 0 0 0-7M14 3a3.5 3.5 0 0 0 0 7M3 21l6-6" />
  </svg>
);
export default SvgLollipop;
