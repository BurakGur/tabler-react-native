import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpLeft = ({
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
    className="icon icon-tabler icon-tabler-arrow-up-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 7 10 10M16 7H7v9" />
  </svg>
);
export default SvgArrowUpLeft;
