import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTed = ({
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
    className="icon icon-tabler icon-tabler-brand-ted"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 8h4M4 8v8M13 8H9v8h4M9 12h2.5M16 8v8h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z" />
  </svg>
);
export default SvgBrandTed;
