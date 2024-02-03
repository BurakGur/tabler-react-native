import * as React from "react";
import type { SVGProps } from "react";
const SvgMarkdownOff = ({
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
    className="icon icon-tabler icon-tabler-markdown-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 5h10a2 2 0 0 1 2 2v10M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.85-2" />
    <path d="M7 15V9l2 2 1-1m1 1v4M17.5 13.5l.5-.5m-2-1V9M3 3l18 18" />
  </svg>
);
export default SvgMarkdownOff;
