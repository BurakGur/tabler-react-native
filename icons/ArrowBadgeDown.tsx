import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBadgeDown = ({
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
    className="icon icon-tabler icon-tabler-arrow-badge-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 13V7l-5 4-5-4v6l5 4z" />
  </svg>
);
export default SvgArrowBadgeDown;
