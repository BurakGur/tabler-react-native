import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamond = ({
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
    className="icon icon-tabler icon-tabler-diamond"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 5h12l3 5-8.5 9.5a.7.7 0 0 1-1 0L3 10z" />
    <path d="M10 12 8 9.8l.6-1" />
  </svg>
);
export default SvgDiamond;
