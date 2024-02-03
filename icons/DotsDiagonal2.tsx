import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsDiagonal2 = ({
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
    className="icon icon-tabler icon-tabler-dots-diagonal-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M16 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgDotsDiagonal2;
