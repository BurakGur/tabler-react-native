import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleCaretLeft = ({
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
    className="icon icon-tabler icon-tabler-circle-caret-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 12 4-4v8z" />
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" />
  </svg>
);
export default SvgCircleCaretLeft;
