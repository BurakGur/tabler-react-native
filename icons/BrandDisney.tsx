import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDisney = ({
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
    className="icon icon-tabler icon-tabler-brand-disney"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3.22 5.838C1.913 5.688 2 5.26 2 5.044S2.424 4 6.34 4C11.034 4 21 7.645 21 14.042s-8.71 4.931-10.435 4.52S5 16.306 5 14.388C5 12.993 8.08 12 11.715 12S17 13.041 17 14c0 .5-.074 1.229-1 1.5" />
    <path d="M10.02 8a505 505 0 0 0 0 13" />
  </svg>
);
export default SvgBrandDisney;
