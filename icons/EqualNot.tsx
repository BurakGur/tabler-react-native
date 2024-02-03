import * as React from "react";
import type { SVGProps } from "react";
const SvgEqualNot = ({
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
    className="icon icon-tabler icon-tabler-equal-not"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 10h14M5 14h14M5 19 19 5" />
  </svg>
);
export default SvgEqualNot;
