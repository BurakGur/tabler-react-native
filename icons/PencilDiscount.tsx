import * as React from "react";
import type { SVGProps } from "react";
const SvgPencilDiscount = ({
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
    className="icon icon-tabler icon-tabler-pencil-discount"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 20h4L18.5 9.5a2.828 2.828 0 1 0-4-4L4 16zM13.5 6.5l4 4M16 21l5-5M21 21v.01M16 16v.01" />
  </svg>
);
export default SvgPencilDiscount;
