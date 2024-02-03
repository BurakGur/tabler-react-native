import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterX = ({
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
    className="icon icon-tabler icon-tabler-filter-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.758 19.414 9 21v-8.5L4.52 7.572A2 2 0 0 1 4 6.227V4h16v2.172a2 2 0 0 1-.586 1.414L15 12v1.5M22 22l-5-5M17 22l5-5" />
  </svg>
);
export default SvgFilterX;
