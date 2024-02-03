import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownRhombus = ({
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
    className="icon icon-tabler icon-tabler-arrow-down-rhombus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 8v13M15 18l-3 3-3-3M14.5 5.5 12 3 9.5 5.5 12 8z" />
  </svg>
);
export default SvgArrowDownRhombus;
