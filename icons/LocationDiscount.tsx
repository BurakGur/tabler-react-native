import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationDiscount = ({
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
    className="icon icon-tabler icon-tabler-location-discount"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.797 19.595 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.548 9.826M16 21l5-5M21 21v.01M16 16v.01" />
  </svg>
);
export default SvgLocationDiscount;
