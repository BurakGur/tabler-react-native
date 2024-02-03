import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandYahoo = ({
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
    className="icon icon-tabler icon-tabler-brand-yahoo"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 6h5M7 18h7M4.5 6l5.5 7v5M10 13l6-5M12.5 8h5M20 11v4M20 18v.01" />
  </svg>
);
export default SvgBrandYahoo;
