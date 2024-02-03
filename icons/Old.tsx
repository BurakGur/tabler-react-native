import * as React from "react";
import type { SVGProps } from "react";
const SvgOld = ({
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
    className="icon icon-tabler icon-tabler-old"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m11 21-1-4-2-3V8" />
    <path d="m5 14-1-3 4-3 3 2 3 .5M7 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 17l-2 4M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
  </svg>
);
export default SvgOld;
