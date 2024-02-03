import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareRoot2 = ({
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
    className="icon icon-tabler icon-tabler-square-root-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 12h1c1 0 1 1 2.016 3.527C17 18 17 19 18 19h1" />
    <path d="M12 19c1.5 0 3-2 4-3.5s2.5-3.5 4-3.5M3 12h1l3 8 3-16h10" />
  </svg>
);
export default SvgSquareRoot2;
