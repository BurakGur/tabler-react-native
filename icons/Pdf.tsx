import * as React from "react";
import type { SVGProps } from "react";
const SvgPdf = ({
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
    className="icon icon-tabler icon-tabler-pdf"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM3 12h2a2 2 0 1 0 0-4H3v8M17 12h3M21 8h-4v8" />
  </svg>
);
export default SvgPdf;
