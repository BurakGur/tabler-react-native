import * as React from "react";
import type { SVGProps } from "react";
const SvgUnderline = ({
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
    className="icon icon-tabler icon-tabler-underline"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 5v5a5 5 0 0 0 10 0V5M5 19h14" />
  </svg>
);
export default SvgUnderline;
