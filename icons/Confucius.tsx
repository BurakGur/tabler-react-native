import * as React from "react";
import type { SVGProps } from "react";
const SvgConfucius = ({
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
    className="icon icon-tabler icon-tabler-confucius"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 19 3 2V3M4 10l8-2M4 18l8-10M20 18l-8-8 8-4" />
  </svg>
);
export default SvgConfucius;
