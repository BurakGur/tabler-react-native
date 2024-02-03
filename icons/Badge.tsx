import * as React from "react";
import type { SVGProps } from "react";
const SvgBadge = ({
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
    className="icon icon-tabler icon-tabler-badge"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 17V4l-5 3-5-3v13l5 3z" />
  </svg>
);
export default SvgBadge;
