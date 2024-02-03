import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBounce = ({
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
    className="icon icon-tabler icon-tabler-arrow-bounce"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 18h4M3 8a9 9 0 0 1 9 9v1l1.428-4.285a12 12 0 0 1 6.018-6.938L20 6.5" />
    <path d="M15 6h5v5" />
  </svg>
);
export default SvgArrowBounce;
