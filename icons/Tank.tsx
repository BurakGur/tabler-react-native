import * as React from "react";
import type { SVGProps } from "react";
const SvgTank = ({
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
    className="icon icon-tabler icon-tabler-tank"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 15a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3M6 12l1-5h5l3 5M21 9h-7.8" />
  </svg>
);
export default SvgTank;
