import * as React from "react";
import type { SVGProps } from "react";
const SvgTrident = ({
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
    className="icon icon-tabler icon-tabler-trident"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 6 2-2v3a7 7 0 0 0 14 0V4l2 2" />
    <path d="M12 21V3l-2 2m4 0-2-2" />
  </svg>
);
export default SvgTrident;
