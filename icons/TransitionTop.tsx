import * as React from "react";
import type { SVGProps } from "react";
const SvgTransitionTop = ({
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
    className="icon icon-tabler icon-tabler-transition-top"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3M6 21h12a3 3 0 0 0 0-6H6a3 3 0 0 0 0 6M12 15V7M9 10l3-3 3 3" />
  </svg>
);
export default SvgTransitionTop;
