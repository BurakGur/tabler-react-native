import * as React from "react";
import type { SVGProps } from "react";
const SvgPencilStar = ({
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
    className="icon icon-tabler icon-tabler-pencil-star"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17.5 10.5 1-1a2.828 2.828 0 1 0-4-4L4 16v4h4l2-2M13.5 6.5l4 4M17.8 20.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411z" />
  </svg>
);
export default SvgPencilStar;
