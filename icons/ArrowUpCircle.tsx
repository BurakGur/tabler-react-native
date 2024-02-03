import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpCircle = ({
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
    className="icon icon-tabler icon-tabler-arrow-up-circle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 17V3M15 6l-3-3-3 3M12 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
  </svg>
);
export default SvgArrowUpCircle;
