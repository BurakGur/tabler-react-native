import * as React from "react";
import type { SVGProps } from "react";
const SvgMathXPlusX = ({
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
    className="icon icon-tabler icon-tabler-math-x-plus-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m2 9 6 6M2 15l6-6M16 9l6 6M16 15l6-6M10 12h4M12 10v4" />
  </svg>
);
export default SvgMathXPlusX;
