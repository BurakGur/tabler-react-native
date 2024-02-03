import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderCornerIos = ({
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
    className="icon icon-tabler icon-tabler-border-corner-ios"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 20c0-6.559 0-9.838 1.628-12.162a9 9 0 0 1 2.21-2.21C10.162 4 13.44 4 20 4" />
  </svg>
);
export default SvgBorderCornerIos;
