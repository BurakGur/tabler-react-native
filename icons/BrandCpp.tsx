import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCpp = ({
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
    className="icon icon-tabler icon-tabler-brand-cpp"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 12h4M20 10v4M11 12h4M13 10v4M9 9a3 3 0 0 0-3-3h-.5A3.5 3.5 0 0 0 2 9.5v5A3.5 3.5 0 0 0 5.5 18H6a3 3 0 0 0 3-3" />
  </svg>
);
export default SvgBrandCpp;
