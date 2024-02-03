import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCitymapper = ({
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
    className="icon icon-tabler icon-tabler-brand-citymapper"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 11a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zM21 11a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zM8 12h8M13 9l3 3-3 3" />
  </svg>
);
export default SvgBrandCitymapper;
