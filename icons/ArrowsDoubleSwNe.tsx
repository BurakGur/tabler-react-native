import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDoubleSwNe = ({
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
    className="icon icon-tabler icon-tabler-arrows-double-sw-ne"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3 3 14M3 10v4h4M17 10h4v4M10 21l11-11" />
  </svg>
);
export default SvgArrowsDoubleSwNe;
