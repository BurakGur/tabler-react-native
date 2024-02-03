import * as React from "react";
import type { SVGProps } from "react";
const SvgCat = ({
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
    className="icon icon-tabler icon-tabler-cat"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 3v10a8 8 0 1 1-16 0V3l3.432 3.432A7.96 7.96 0 0 1 12 5c1.769 0 3.403.574 4.728 1.546z" />
    <path d="M2 16h5l-4 4M22 16h-5l4 4M11 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 11v.01M15 11v.01" />
  </svg>
);
export default SvgCat;
