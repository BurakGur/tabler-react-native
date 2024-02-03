import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpDelete = ({
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
    className="icon icon-tabler icon-tabler-http-delete"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM14 8h-4v8h4M10 12h2.5M17 8v8h4" />
  </svg>
);
export default SvgHttpDelete;
