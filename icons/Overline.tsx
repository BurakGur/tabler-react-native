import * as React from "react";
import type { SVGProps } from "react";
const SvgOverline = ({
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
    className="icon icon-tabler icon-tabler-overline"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 9v5a5 5 0 0 0 10 0V9M5 5h14" />
  </svg>
);
export default SvgOverline;
