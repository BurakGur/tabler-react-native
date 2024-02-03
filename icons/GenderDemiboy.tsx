import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderDemiboy = ({
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
    className="icon icon-tabler icon-tabler-gender-demiboy"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 14a5 5 0 1 0 10 0 5 5 0 1 0-10 0M19 5l-5.4 5.4M19 5h-5" />
  </svg>
);
export default SvgGenderDemiboy;
