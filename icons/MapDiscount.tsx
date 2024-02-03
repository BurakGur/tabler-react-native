import * as React from "react";
import type { SVGProps } from "react";
const SvgMapDiscount = ({
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
    className="icon icon-tabler icon-tabler-map-discount"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m13 19-4-2-6 3V7l6-3 6 3 6-3v8.5M9 4v13M15 7v5.5M16 21l5-5M21 21v.01M16 16v.01" />
  </svg>
);
export default SvgMapDiscount;
