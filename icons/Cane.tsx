import * as React from "react";
import type { SVGProps } from "react";
const SvgCane = ({
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
    className="icon icon-tabler icon-tabler-cane"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 21 6.324-11.69c.54-.974 1.756-4.104-1.499-5.762S8.65 4.411 8 5.58" />
  </svg>
);
export default SvgCane;
