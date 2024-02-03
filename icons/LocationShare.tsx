import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationShare = ({
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
    className="icon icon-tabler icon-tabler-location-share"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 18-2-4-7-3.5a.55.55 0 0 1 0-1L21 3l-3.616 10.015M16 22l5-5M21 21.5V17h-4.5" />
  </svg>
);
export default SvgLocationShare;
