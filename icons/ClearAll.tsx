import * as React from "react";
import type { SVGProps } from "react";
const SvgClearAll = ({
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
    className="icon icon-tabler icon-tabler-clear-all"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 6h12M6 12h12M4 18h12" />
  </svg>
);
export default SvgClearAll;
