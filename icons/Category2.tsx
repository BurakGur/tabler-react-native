import * as React from "react";
import type { SVGProps } from "react";
const SvgCategory2 = ({
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
    className="icon icon-tabler icon-tabler-category-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 4h6v6h-6zM4 14h6v6H4zM14 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M4 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </svg>
);
export default SvgCategory2;
