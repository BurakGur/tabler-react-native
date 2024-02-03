import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowGuide = ({
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
    className="icon icon-tabler icon-tabler-arrow-guide"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 19h3a2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h7" />
    <path d="m18 4 3 3-3 3" />
  </svg>
);
export default SvgArrowGuide;
