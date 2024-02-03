import * as React from "react";
import type { SVGProps } from "react";
const SvgTrees = ({
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
    className="icon icon-tabler icon-tabler-trees"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m16 5 3 3-2 1 4 4-3 1 4 4h-9M15 21v-3M8 13l-2-2M8 12l2-2M8 21V8M5.824 16a3 3 0 0 1-2.743-3.69 3 3 0 0 1 .304-4.833A3 3 0 0 1 8 3.77a3 3 0 0 1 4.614 3.707 3 3 0 0 1 .305 4.833A3 3 0 0 1 10 16.005H6z" />
  </svg>
);
export default SvgTrees;
