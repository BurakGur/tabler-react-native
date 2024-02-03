import * as React from "react";
import type { SVGProps } from "react";
const SvgAnchor = ({
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
    className="icon icon-tabler icon-tabler-anchor"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 9v12m-8-8a8 8 0 0 0 16 0m1 0h-2M5 13H3M9 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </svg>
);
export default SvgAnchor;
