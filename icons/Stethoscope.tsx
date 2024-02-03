import * as React from "react";
import type { SVGProps } from "react";
const SvgStethoscope = ({
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
    className="icon icon-tabler icon-tabler-stethoscope"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 4H5a2 2 0 0 0-2 2v3.5h0a5.5 5.5 0 0 0 11 0V6a2 2 0 0 0-2-2h-1" />
    <path d="M8 15a6 6 0 1 0 12 0v-3M11 3v2M6 3v2" />
    <path d="M18 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </svg>
);
export default SvgStethoscope;
