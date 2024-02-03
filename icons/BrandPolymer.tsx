import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPolymer = ({
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
    className="icon icon-tabler icon-tabler-brand-polymer"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6.706 6 3 12l3.706 6h1.059l8.47-12h1.06L21 12l-3.706 6" />
  </svg>
);
export default SvgBrandPolymer;
