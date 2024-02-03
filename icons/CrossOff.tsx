import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossOff = ({
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
    className="icon icon-tabler icon-tabler-cross-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 12h3V8h-5V3h-4v3M8 8H5v4h5v9h4v-7M3 3l18 18" />
  </svg>
);
export default SvgCrossOff;
