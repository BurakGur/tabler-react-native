import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMoveRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-move-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 12h10M18 9l3 3-3 3M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
  </svg>
);
export default SvgArrowMoveRight;
