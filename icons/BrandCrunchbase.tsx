import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCrunchbase = ({
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
    className="icon icon-tabler icon-tabler-brand-crunchbase"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2" />
    <path d="M10.414 11.586a2 2 0 1 0 0 2.828M13 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0M13 7v6" />
  </svg>
);
export default SvgBrandCrunchbase;
