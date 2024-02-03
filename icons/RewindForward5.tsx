import * as React from "react";
import type { SVGProps } from "react";
const SvgRewindForward5 = ({
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
    className="icon icon-tabler icon-tabler-rewind-forward-5"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 18A6 6 0 1 1 9 6h11M13 20h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2v-3h3" />
    <path d="m17 9 3-3-3-3" />
  </svg>
);
export default SvgRewindForward5;
