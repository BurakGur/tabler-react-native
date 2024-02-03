import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsMoveHorizontal = ({
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
    className="icon icon-tabler icon-tabler-arrows-move-horizontal"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m18 9 3 3-3 3M15 12h6M6 9l-3 3 3 3M3 12h6" />
  </svg>
);
export default SvgArrowsMoveHorizontal;
