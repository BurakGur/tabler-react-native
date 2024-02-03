import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterX = ({
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
    className="icon icon-tabler icon-tabler-letter-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 4 10 16M17 4 7 20" />
  </svg>
);
export default SvgLetterX;
