import * as React from "react";
import type { SVGProps } from "react";
const SvgPepper = ({
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
    className="icon icon-tabler icon-tabler-pepper"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 11c0 2.21-2.239 4-5 4s-5-1.79-5-4a8 8 0 1 0 16 0 3 3 0 0 0-6 0" />
    <path d="M16 8c0-2 2-4 4-4" />
  </svg>
);
export default SvgPepper;
