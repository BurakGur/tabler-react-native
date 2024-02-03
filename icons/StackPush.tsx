import * as React from "react";
import type { SVGProps } from "react";
const SvgStackPush = ({
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
    className="icon icon-tabler icon-tabler-stack-push"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6 10-2 1 8 4 8-4-2-1M4 15l8 4 8-4M12 4v7" />
    <path d="m15 8-3 3-3-3" />
  </svg>
);
export default SvgStackPush;
