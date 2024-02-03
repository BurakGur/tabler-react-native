import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterOff = ({
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
    className="icon icon-tabler icon-tabler-filter-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 4h12v2.172a2 2 0 0 1-.586 1.414L15.5 11.5M15 15v4l-6 2v-8.5L4.52 7.572A2 2 0 0 1 4 6.227V4M3 3l18 18" />
  </svg>
);
export default SvgFilterOff;
