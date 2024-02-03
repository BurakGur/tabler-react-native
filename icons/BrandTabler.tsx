import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTabler = ({
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
    className="icon icon-tabler icon-tabler-brand-tabler"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 9 3 3-3 3M13 15h3" />
    <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
  </svg>
);
export default SvgBrandTabler;
