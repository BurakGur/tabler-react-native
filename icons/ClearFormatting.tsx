import * as React from "react";
import type { SVGProps } from "react";
const SvgClearFormatting = ({
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
    className="icon icon-tabler icon-tabler-clear-formatting"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17 15 4 4m0-4-4 4M7 6V5h11v1M7 19h4M13 5 9 19" />
  </svg>
);
export default SvgClearFormatting;
