import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMatrix = ({
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
    className="icon icon-tabler icon-tabler-brand-matrix"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 3H3v18h1M20 21h1V3h-1M7 9v6M12 15v-3.5a2.5 2.5 0 1 0-5 0v.5M17 15v-3.5a2.5 2.5 0 1 0-5 0v.5" />
  </svg>
);
export default SvgBrandMatrix;
