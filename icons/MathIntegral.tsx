import * as React from "react";
import type { SVGProps } from "react";
const SvgMathIntegral = ({
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
    className="icon icon-tabler icon-tabler-math-integral"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 19a2 2 0 0 0 2 2c2 0 2-4 3-9s1-9 3-9a2 2 0 0 1 2 2" />
  </svg>
);
export default SvgMathIntegral;
