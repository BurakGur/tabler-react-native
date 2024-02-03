import * as React from "react";
import type { SVGProps } from "react";
const SvgCaretDown = ({
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
    className="icon icon-tabler icon-tabler-caret-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6 10 6 6 6-6z" />
  </svg>
);
export default SvgCaretDown;
