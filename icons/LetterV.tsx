import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterV = ({
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
    className="icon icon-tabler icon-tabler-letter-v"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6 4 6 16 6-16" />
  </svg>
);
export default SvgLetterV;
