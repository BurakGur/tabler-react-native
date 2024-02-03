import * as React from "react";
import type { SVGProps } from "react";
const SvgRadiusBottomRight = ({
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
    className="icon icon-tabler icon-tabler-radius-bottom-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 5v6a8 8 0 0 1-8 8H5" />
  </svg>
);
export default SvgRadiusBottomRight;
