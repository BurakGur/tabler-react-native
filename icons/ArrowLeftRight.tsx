import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-left-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17 13 4-4-4-4M7 13 3 9l4-4" />
    <path d="M12 14a5 5 0 0 1 5-5h4M12 19v-5a5 5 0 0 0-5-5H3" />
  </svg>
);
export default SvgArrowLeftRight;
