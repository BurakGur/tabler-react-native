import * as React from "react";
import type { SVGProps } from "react";
const SvgTrademark = ({
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
    className="icon icon-tabler icon-tabler-trademark"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.5 9h5M7 9v6M13 15V9l3 4 3-4v6" />
  </svg>
);
export default SvgTrademark;
