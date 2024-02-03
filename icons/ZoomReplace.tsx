import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomReplace = ({
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
    className="icon icon-tabler icon-tabler-zoom-replace"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m21 21-6-6M3.291 8a7 7 0 0 1 5.077-4.806 7.02 7.02 0 0 1 8.242 4.403" />
    <path d="M17 4v4h-4M16.705 12a7 7 0 0 1-5.074 4.798 7.02 7.02 0 0 1-8.241-4.403" />
    <path d="M3 16v-4h4" />
  </svg>
);
export default SvgZoomReplace;
