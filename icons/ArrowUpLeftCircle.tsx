import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpLeftCircle = ({
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
    className="icon icon-tabler icon-tabler-arrow-up-left-circle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15.536 15.536 6 6M10 6H6v4M15.586 15.586a2 2 0 1 0 2.828 2.828 2 2 0 0 0-2.828-2.828" />
  </svg>
);
export default SvgArrowUpLeftCircle;
