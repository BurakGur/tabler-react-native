import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPepsi = ({
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
    className="icon icon-tabler icon-tabler-brand-pepsi"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M4 16c5.713-2.973 11-3.5 13.449-11.162" />
    <path d="M5 17.5c5.118-2.859 15 0 14-11" />
  </svg>
);
export default SvgBrandPepsi;
