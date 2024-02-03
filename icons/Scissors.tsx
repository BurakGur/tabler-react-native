import * as React from "react";
import type { SVGProps } from "react";
const SvgScissors = ({
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
    className="icon icon-tabler icon-tabler-scissors"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M8.6 8.6 19 19M8.6 15.4 19 5" />
  </svg>
);
export default SvgScissors;
