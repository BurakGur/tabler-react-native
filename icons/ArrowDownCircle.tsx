import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownCircle = ({
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
    className="icon icon-tabler icon-tabler-arrow-down-circle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 7v14M9 18l3 3 3-3M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </svg>
);
export default SvgArrowDownCircle;
