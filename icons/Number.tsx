import * as React from "react";
import type { SVGProps } from "react";
const SvgNumber = ({
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
    className="icon icon-tabler icon-tabler-number"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 17V7l7 10V7M15 17h5M15 10a2.5 3 0 1 0 5 0 2.5 3 0 1 0-5 0" />
  </svg>
);
export default SvgNumber;
