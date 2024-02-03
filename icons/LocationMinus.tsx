import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationMinus = ({
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
    className="icon icon-tabler icon-tabler-location-minus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 18-2-4-7-3.5a.55.55 0 0 1 0-1L21 3l-4.347 12.038M16 19h6" />
  </svg>
);
export default SvgLocationMinus;
