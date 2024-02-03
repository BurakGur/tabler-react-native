import * as React from "react";
import type { SVGProps } from "react";
const SvgNumber1 = ({
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
    className="icon icon-tabler icon-tabler-number-1"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 20V4L8 9" />
  </svg>
);
export default SvgNumber1;
