import * as React from "react";
import type { SVGProps } from "react";
const SvgReload = ({
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
    className="icon icon-tabler icon-tabler-reload"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.933 13.041a8 8 0 1 1-9.925-8.788c3.899-1 7.935 1.007 9.425 4.747" />
    <path d="M20 4v5h-5" />
  </svg>
);
export default SvgReload;
