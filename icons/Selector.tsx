import * as React from "react";
import type { SVGProps } from "react";
const SvgSelector = ({
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
    className="icon icon-tabler icon-tabler-selector"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 9 4-4 4 4M16 15l-4 4-4-4" />
  </svg>
);
export default SvgSelector;
