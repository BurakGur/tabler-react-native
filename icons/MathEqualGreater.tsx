import * as React from "react";
import type { SVGProps } from "react";
const SvgMathEqualGreater = ({
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
    className="icon icon-tabler icon-tabler-math-equal-greater"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m5 18 14-4M5 14l14-4L5 6" />
  </svg>
);
export default SvgMathEqualGreater;
