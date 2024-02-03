import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBadgeLeft = ({
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
    className="icon icon-tabler icon-tabler-arrow-badge-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 17h6l-4-5 4-5h-6l-4 5z" />
  </svg>
);
export default SvgArrowBadgeLeft;
