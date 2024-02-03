import * as React from "react";
import type { SVGProps } from "react";
const SvgArcheryArrow = ({
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
    className="icon icon-tabler icon-tabler-archery-arrow"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 7v3h3l3-3h-3V4zM14 10l-9 9M5 15v4h4" />
  </svg>
);
export default SvgArcheryArrow;
