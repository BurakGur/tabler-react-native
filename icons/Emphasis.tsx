import * as React from "react";
import type { SVGProps } from "react";
const SvgEmphasis = ({
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
    className="icon icon-tabler icon-tabler-emphasis"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 5H8v10h8m-1-5H8M6 20v.01M10 20v.01M14 20v.01M18 20v.01" />
  </svg>
);
export default SvgEmphasis;
