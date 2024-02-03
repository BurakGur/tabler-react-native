import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDoctrine = ({
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
    className="icon icon-tabler icon-tabler-brand-doctrine"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0M9 14h6" />
    <path d="m12 11 3 3-3 3M10 3l6.9 6" />
  </svg>
);
export default SvgBrandDoctrine;
