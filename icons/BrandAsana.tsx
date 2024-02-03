import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAsana = ({
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
    className="icon icon-tabler icon-tabler-brand-asana"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M4 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </svg>
);
export default SvgBrandAsana;
