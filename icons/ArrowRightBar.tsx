import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightBar = ({
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
    className="icon icon-tabler icon-tabler-arrow-right-bar"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m18 15 3-3-3-3M3 12h18M3 9v6" />
  </svg>
);
export default SvgArrowRightBar;
