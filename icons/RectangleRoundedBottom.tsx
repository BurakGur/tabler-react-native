import * as React from "react";
import type { SVGProps } from "react";
const SvgRectangleRoundedBottom = ({
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
    className="icon icon-tabler icon-tabler-rectangle-rounded-bottom"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 18h6a6 6 0 0 0 6-6V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a6 6 0 0 0 6 6" />
  </svg>
);
export default SvgRectangleRoundedBottom;
