import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandEtsy = ({
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
    className="icon icon-tabler icon-tabler-brand-etsy"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 12H9M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" />
    <path d="M15 16h-5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5" />
  </svg>
);
export default SvgBrandEtsy;
