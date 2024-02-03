import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBackUpDouble = ({
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
    className="icon icon-tabler icon-tabler-arrow-back-up-double"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m13 14-4-4 4-4M8 14l-4-4 4-4" />
    <path d="M9 10h7a4 4 0 1 1 0 8h-1" />
  </svg>
);
export default SvgArrowBackUpDouble;
