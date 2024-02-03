import * as React from "react";
import type { SVGProps } from "react";
const SvgRewindForward50 = ({
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
    className="icon icon-tabler icon-tabler-rewind-forward-50"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.007 16.478A6 6 0 0 1 9 6h11M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0" />
    <path d="m17 9 3-3-3-3M9 20h1.5a1.5 1.5 0 0 0 0-3H9v-3h3" />
  </svg>
);
export default SvgRewindForward50;
