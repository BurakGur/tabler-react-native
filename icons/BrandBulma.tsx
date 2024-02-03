import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBulma = ({
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
    className="icon icon-tabler icon-tabler-brand-bulma"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m5 16 1-9 5-5 6.5 6-3.5 4 5 5-8 5z" />
  </svg>
);
export default SvgBrandBulma;
