import * as React from "react";
import type { SVGProps } from "react";
const SvgPageBreak = ({
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
    className="icon icon-tabler icon-tabler-page-break"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4M19 18v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1M3 14h3m4.5 0h3m4.5 0h3" />
    <path d="M5 10V5a2 2 0 0 1 2-2h7l5 5v2" />
  </svg>
);
export default SvgPageBreak;
