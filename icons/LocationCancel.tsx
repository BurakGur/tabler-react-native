import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationCancel = ({
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
    className="icon icon-tabler icon-tabler-location-cancel"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 18-2-4-7-3.5a.55.55 0 0 1 0-1L21 3l-3.305 9.151M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0M17 21l4-4" />
  </svg>
);
export default SvgLocationCancel;
