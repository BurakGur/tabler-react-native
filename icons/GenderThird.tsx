import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderThird = ({
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
    className="icon icon-tabler icon-tabler-gender-third"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0M11 12H8M8 12 3 8v8z" />
  </svg>
);
export default SvgGenderThird;
