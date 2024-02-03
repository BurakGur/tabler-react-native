import * as React from "react";
import type { SVGProps } from "react";
const SvgPrison = ({
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
    className="icon icon-tabler icon-tabler-prison"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 4v16M14 4v16M6 4v5M6 15v5M10 4v5M11 9H5v6h6zM10 15v5M8 12h-.01" />
  </svg>
);
export default SvgPrison;
