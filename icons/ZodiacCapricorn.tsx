import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacCapricorn = ({
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
    className="icon icon-tabler icon-tabler-zodiac-capricorn"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 4a3 3 0 0 1 3 3v9M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1-3 3M13 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </svg>
);
export default SvgZodiacCapricorn;
