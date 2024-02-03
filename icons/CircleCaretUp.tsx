import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleCaretUp = ({
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
    className="icon icon-tabler icon-tabler-circle-caret-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 9 4 4H8z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
  </svg>
);
export default SvgCircleCaretUp;
