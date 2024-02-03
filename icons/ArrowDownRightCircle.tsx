import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownRightCircle = ({
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
    className="icon icon-tabler icon-tabler-arrow-down-right-circle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8.464 8.464 18 18M14 18h4v-4M8.414 8.414a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828" />
  </svg>
);
export default SvgArrowDownRightCircle;
