import * as React from "react";
import type { SVGProps } from "react";
const SvgTextWrapDisabled = ({
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
    className="icon icon-tabler icon-tabler-text-wrap-disabled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6h10M4 18h10M4 12h17l-3-3m0 6 3-3" />
  </svg>
);
export default SvgTextWrapDisabled;
