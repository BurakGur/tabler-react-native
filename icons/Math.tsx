import * as React from "react";
import type { SVGProps } from "react";
const SvgMath = ({
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
    className="icon icon-tabler icon-tabler-math"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 5h-7L8 19l-3-6H3M14 13l6 6M14 19l6-6" />
  </svg>
);
export default SvgMath;
