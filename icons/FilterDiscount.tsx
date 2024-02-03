import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterDiscount = ({
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
    className="icon icon-tabler icon-tabler-filter-discount"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.705 19.765 9 21v-8.5L4.52 7.572A2 2 0 0 1 4 6.227V4h16v2.172a2 2 0 0 1-.586 1.414L15 12v.5M16 21l5-5M21 21v.01M16 16v.01" />
  </svg>
);
export default SvgFilterDiscount;
