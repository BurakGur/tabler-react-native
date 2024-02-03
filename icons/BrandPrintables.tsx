import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPrintables = ({
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
    className="icon icon-tabler icon-tabler-brand-printables"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6 21 12-7V6.5L12 3 6 6.5l6 3.5v7.5L6 14z" />
  </svg>
);
export default SvgBrandPrintables;
