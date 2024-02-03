import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandLinqpad = ({
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
    className="icon icon-tabler icon-tabler-brand-linqpad"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 21h3.5l2.5-6 2.5-1 2.5 7h4l1-4.5-2-1-7-12L6 3l1.5 4 2.5.5 1 2.5-7 8z" />
  </svg>
);
export default SvgBrandLinqpad;
