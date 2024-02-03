import * as React from "react";
import type { SVGProps } from "react";
const SvgGrave2 = ({
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
    className="icon icon-tabler icon-tabler-grave-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 16.17V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v9.171M12 7v5M10 9h4" />
    <path d="M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2z" />
  </svg>
);
export default SvgGrave2;
