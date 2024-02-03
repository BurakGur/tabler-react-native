import * as React from "react";
import type { SVGProps } from "react";
const SvgStackBackward = ({
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
    className="icon icon-tabler icon-tabler-stack-backward"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m14 12 6-3-8-4-8 4 6 3" />
    <path fill="currentColor" d="m10 12-6 3 8 4 8-4-6-3-2 1z" />
  </svg>
);
export default SvgStackBackward;
