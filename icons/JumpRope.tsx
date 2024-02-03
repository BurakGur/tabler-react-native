import * as React from "react";
import type { SVGProps } from "react";
const SvgJumpRope = ({
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
    className="icon icon-tabler icon-tabler-jump-rope"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 14V8a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" />
    <path d="M16 5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2zM4 16a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2z" />
  </svg>
);
export default SvgJumpRope;
