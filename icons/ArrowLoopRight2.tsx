import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLoopRight2 = ({
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
    className="icon icon-tabler icon-tabler-arrow-loop-right-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 21v-6m0-6V8a4 4 0 1 0-4 4h13" />
    <path d="m17 16 4-4-4-4" />
  </svg>
);
export default SvgArrowLoopRight2;
