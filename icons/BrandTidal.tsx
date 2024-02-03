import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTidal = ({
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
    className="icon icon-tabler icon-tabler-brand-tidal"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m5.333 6 3.334 3.25L12 6l3.333 3.25L18.667 6 22 9.25l-3.333 3.25-3.334-3.25L12 12.5l3.333 3.25L12 19l-3.333-3.25L12 12.5 8.667 9.25 5.333 12.5 2 9.25z" />
  </svg>
);
export default SvgBrandTidal;
