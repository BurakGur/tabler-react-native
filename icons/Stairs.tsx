import * as React from "react";
import type { SVGProps } from "react";
const SvgStairs = ({
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
    className="icon icon-tabler icon-tabler-stairs"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M22 5h-5v5h-5v5H7v5H2" />
  </svg>
);
export default SvgStairs;
