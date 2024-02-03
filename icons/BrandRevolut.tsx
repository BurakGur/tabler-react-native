import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandRevolut = ({
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
    className="icon icon-tabler icon-tabler-brand-revolut"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 10h3v10H5z" />
    <path d="M14.5 4H5v3h9.4a1.5 1.5 0 0 1 0 3H11v4l4 6h4l-5-7h.5a4.5 4.5 0 1 0 0-9" />
  </svg>
);
export default SvgBrandRevolut;
