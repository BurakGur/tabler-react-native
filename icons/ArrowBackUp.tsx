import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBackUp = ({
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
    className="icon icon-tabler icon-tabler-arrow-back-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 14-4-4 4-4" />
    <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
  </svg>
);
export default SvgArrowBackUp;
