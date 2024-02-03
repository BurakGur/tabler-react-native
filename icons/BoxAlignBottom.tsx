import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxAlignBottom = ({
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
    className="icon icon-tabler icon-tabler-box-align-bottom"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 14h16v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM4 9v.01M4 4v.01M9 4v.01M15 4v.01M20 4v.01M20 9v.01" />
  </svg>
);
export default SvgBoxAlignBottom;
