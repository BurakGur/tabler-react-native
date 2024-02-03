import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderAndrogyne = ({
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
    className="icon icon-tabler icon-tabler-gender-androgyne"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m13 11 6-6M4 15a5 5 0 1 0 10 0 5 5 0 1 0-10 0M19 9V5h-4M16.5 10.5l-3-3" />
  </svg>
);
export default SvgGenderAndrogyne;
