import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandElectronicArts = ({
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
    className="icon icon-tabler icon-tabler-brand-electronic-arts"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="m17.5 15-3-6-3 6h-5L8 12M17 14h-2M6.5 12H10M8 9h3" />
  </svg>
);
export default SvgBrandElectronicArts;
