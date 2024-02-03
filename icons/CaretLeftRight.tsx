import * as React from "react";
import type { SVGProps } from "react";
const SvgCaretLeftRight = ({
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
    className="icon icon-tabler icon-tabler-caret-left-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m14 18 6-6-6-6zM10 18l-6-6 6-6z" />
  </svg>
);
export default SvgCaretLeftRight;
