import * as React from "react";
import type { SVGProps } from "react";
const SvgMathYMinusY = ({
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
    className="icon icon-tabler icon-tabler-math-y-minus-y"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m2 9 3 5.063M8 9l-4.8 9M16 9l3 5.063M22 9l-4.8 9M10 12h4" />
  </svg>
);
export default SvgMathYMinusY;
