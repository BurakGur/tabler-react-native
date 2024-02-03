import * as React from "react";
import type { SVGProps } from "react";
const SvgMapShare = ({
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
    className="icon icon-tabler icon-tabler-map-share"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m13 19-4-2-6 3V7l6-3 6 3 6-3v9M9 4v13M15 7v6.5M16 22l5-5M21 21.5V17h-4.5" />
  </svg>
);
export default SvgMapShare;
