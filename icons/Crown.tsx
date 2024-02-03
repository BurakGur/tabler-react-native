import * as React from "react";
import type { SVGProps } from "react";
const SvgCrown = ({
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
    className="icon icon-tabler icon-tabler-crown"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 6 4 6 5-4-2 10H5L3 8l5 4z" />
  </svg>
);
export default SvgCrown;
