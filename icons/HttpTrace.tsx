import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpTrace = ({
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
    className="icon icon-tabler icon-tabler-http-trace"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 8h4M5 8v8M10 12h2a2 2 0 1 0 0-4h-2v8m4 0-3-4M17 16v-6a2 2 0 1 1 4 0v6M17 13h4" />
  </svg>
);
export default SvgHttpTrace;
