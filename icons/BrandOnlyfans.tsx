import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandOnlyfans = ({
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
    className="icon icon-tabler icon-tabler-brand-onlyfans"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8.5 6a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" />
    <path d="M8.5 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M14 16c2.5 0 6.42-1.467 7-4h-6c3-1 6.44-3.533 7-6h-4c-3.03 0-3.764-.196-5 1.5" />
  </svg>
);
export default SvgBrandOnlyfans;
