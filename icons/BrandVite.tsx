import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVite = ({
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
    className="icon icon-tabler icon-tabler-brand-vite"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 4.5 16 3l-2 6.5 2-.5-4 7v-5l-3 1z" />
    <path d="M15 6.5 22 5 12 22 2 5l7.741 1.5" />
  </svg>
);
export default SvgBrandVite;
