import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLoopLeft2 = ({
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
    className="icon icon-tabler icon-tabler-arrow-loop-left-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 21v-6m0-6V8a4 4 0 1 1 4 4H4" />
    <path d="m8 16-4-4 4-4" />
  </svg>
);
export default SvgArrowLoopLeft2;
