import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpHead = ({
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
    className="icon icon-tabler icon-tabler-http-head"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 16V8M7 8v8M3 12h4M14 8h-4v8h4M10 12h2.5M17 16v-6a2 2 0 1 1 4 0v6M17 13h4" />
  </svg>
);
export default SvgHttpHead;
