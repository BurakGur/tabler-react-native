import * as React from "react";
import type { SVGProps } from "react";
const SvgPencilOff = ({
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
    className="icon icon-tabler icon-tabler-pencil-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m10 10-6 6v4h4l6-6m1.99-1.99 2.504-2.504a2.828 2.828 0 1 0-4-4l-2.5 2.5M13.5 6.5l4 4M3 3l18 18" />
  </svg>
);
export default SvgPencilOff;
