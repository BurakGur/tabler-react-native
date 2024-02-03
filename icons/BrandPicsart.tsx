import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPicsart = ({
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
    className="icon icon-tabler icon-tabler-brand-picsart"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9" />
    <path d="M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M5 9v11a2 2 0 1 0 4 0v-4.5" />
  </svg>
);
export default SvgBrandPicsart;
