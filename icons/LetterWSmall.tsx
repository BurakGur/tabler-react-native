import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterWSmall = ({
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
    className="icon icon-tabler icon-tabler-letter-w-small"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 8 1 8 2-5 2 5 1-8" />
  </svg>
);
export default SvgLetterWSmall;
