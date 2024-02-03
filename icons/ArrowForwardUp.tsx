import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowForwardUp = ({
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
    className="icon icon-tabler icon-tabler-arrow-forward-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m15 14 4-4-4-4" />
    <path d="M19 10H8a4 4 0 1 0 0 8h1" />
  </svg>
);
export default SvgArrowForwardUp;
