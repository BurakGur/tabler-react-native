import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowIteration = ({
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
    className="icon icon-tabler icon-tabler-arrow-iteration"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8.5 16A5.5 5.5 0 1 0 3 10.5v.5M3 16h18M18 13l3 3-3 3" />
  </svg>
);
export default SvgArrowIteration;
