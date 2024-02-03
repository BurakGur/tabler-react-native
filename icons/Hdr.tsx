import * as React from "react";
import type { SVGProps } from "react";
const SvgHdr = ({
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
    className="icon icon-tabler icon-tabler-hdr"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 16V8M7 8v8M3 12h4M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM17 12h2a2 2 0 1 0 0-4h-2v8m4 0-3-4" />
  </svg>
);
export default SvgHdr;
