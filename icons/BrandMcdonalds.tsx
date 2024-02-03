import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMcdonalds = ({
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
    className="icon icon-tabler icon-tabler-brand-mcdonalds"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 20c0-3.952-.966-16-4.038-16S12 13.087 12 18.756C12 13.087 11.104 4 8.038 4 4.973 4 4 16.048 4 20" />
  </svg>
);
export default SvgBrandMcdonalds;
