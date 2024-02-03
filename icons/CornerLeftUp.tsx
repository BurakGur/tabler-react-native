import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerLeftUp = ({
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
    className="icon icon-tabler icon-tabler-corner-left-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 18h-6a3 3 0 0 1-3-3V5L5 9m8 0L9 5" />
  </svg>
);
export default SvgCornerLeftUp;
