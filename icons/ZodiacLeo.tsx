import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacLeo = ({
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
    className="icon icon-tabler icon-tabler-zodiac-leo"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 17a4 4 0 1 0 8 0M3 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M7 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <path d="M7 7c0 3 2 5 2 9M15 7c0 4-2 6-2 10" />
  </svg>
);
export default SvgZodiacLeo;
