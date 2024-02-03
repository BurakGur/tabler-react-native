import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBing = ({
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
    className="icon icon-tabler icon-tabler-brand-bing"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m5 3 4 1.5v12l6-2.5-2-1-1-4 7 2.5V16L9 21l-4-2z" />
  </svg>
);
export default SvgBrandBing;
