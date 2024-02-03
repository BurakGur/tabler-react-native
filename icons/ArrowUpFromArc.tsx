import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpFromArc = ({
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
    className="icon icon-tabler icon-tabler-arrow-up-from-arc"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 9v12M8 17l4 4 4-4M21 12a9 9 0 0 0-18 0" />
  </svg>
);
export default SvgArrowUpFromArc;
