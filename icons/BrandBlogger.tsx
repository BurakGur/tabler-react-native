import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBlogger = ({
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
    className="icon icon-tabler icon-tabler-brand-blogger"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 21h8a5 5 0 0 0 5-5v-3a3 3 0 0 0-3-3h-1V8a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5" />
    <path d="M7 8.5A1.5 1.5 0 0 1 8.5 7h3A1.5 1.5 0 0 1 13 8.5v0a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7 8.5M7 15.5A1.5 1.5 0 0 1 8.5 14h7a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 15.5" />
  </svg>
);
export default SvgBrandBlogger;
