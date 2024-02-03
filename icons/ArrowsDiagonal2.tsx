import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDiagonal2 = ({
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
    className="icon icon-tabler icon-tabler-arrows-diagonal-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 20h4v-4M14 14l6 6M8 4H4v4M4 4l6 6" />
  </svg>
);
export default SvgArrowsDiagonal2;
