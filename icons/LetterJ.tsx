import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterJ = ({
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
    className="icon icon-tabler icon-tabler-letter-j"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 4v12a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4" />
  </svg>
);
export default SvgLetterJ;
