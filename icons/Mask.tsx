import * as React from "react";
import type { SVGProps } from "react";
const SvgMask = ({
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
    className="icon icon-tabler icon-tabler-mask"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
  </svg>
);
export default SvgMask;
