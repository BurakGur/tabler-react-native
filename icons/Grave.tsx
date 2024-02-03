import * as React from "react";
import type { SVGProps } from "react";
const SvgGrave = ({
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
    className="icon icon-tabler icon-tabler-grave"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2zM10 16v-5H6V7h4V3h4v4h4v4h-4v5" />
  </svg>
);
export default SvgGrave;
