import * as React from "react";
import type { SVGProps } from "react";
const SvgStackMiddle = ({
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
    className="icon icon-tabler icon-tabler-stack-middle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m16 10 4-2-8-4-8 4 4 2" />
    <path fill="currentColor" d="m12 12-4-2-4 2 8 4 8-4-4-2z" />
    <path d="m8 14-4 2 8 4 8-4-4-2" />
  </svg>
);
export default SvgStackMiddle;
