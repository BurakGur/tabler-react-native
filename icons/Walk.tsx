import * as React from "react";
import type { SVGProps } from "react";
const SvgWalk = ({
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
    className="icon icon-tabler icon-tabler-walk"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 21l3-4M16 21l-2-4-3-3 1-6" />
    <path d="m6 12 2-3 4-1 3 3 3 1" />
  </svg>
);
export default SvgWalk;
