import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterBSmall = ({
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
    className="icon icon-tabler icon-tabler-letter-b-small"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 16h2a2 2 0 1 0 0-4h-2 2a2 2 0 1 0 0-4h-2z" />
  </svg>
);
export default SvgLetterBSmall;
