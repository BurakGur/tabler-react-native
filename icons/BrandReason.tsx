import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandReason = ({
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
    className="icon icon-tabler icon-tabler-brand-reason"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M18 18h-3v-6h3M18 15h-3M8 18v-6h2.5a1.5 1.5 0 0 1 0 3H8M12 18l-2-3" />
  </svg>
);
export default SvgBrandReason;
