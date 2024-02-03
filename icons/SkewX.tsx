import * as React from "react";
import type { SVGProps } from "react";
const SvgSkewX = ({
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
    className="icon icon-tabler icon-tabler-skew-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 5.205v13.59a1 1 0 0 0 1.184.983l14-2.625A1 1 0 0 0 20 16.17V7.83a1 1 0 0 0-.816-.983l-14-2.625A1 1 0 0 0 4 5.205" />
  </svg>
);
export default SvgSkewX;
