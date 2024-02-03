import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterCaseUpper = ({
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
    className="icon icon-tabler icon-tabler-letter-case-upper"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 19V8.5a3.5 3.5 0 0 1 7 0V19M3 13h7M14 19V8.5a3.5 3.5 0 0 1 7 0V19M14 13h7" />
  </svg>
);
export default SvgLetterCaseUpper;
