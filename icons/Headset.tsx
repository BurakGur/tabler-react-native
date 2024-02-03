import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadset = ({
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
    className="icon icon-tabler icon-tabler-headset"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 14v-3a8 8 0 1 1 16 0v3M18 19c0 1.657-2.686 3-6 3" />
    <path d="M4 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM15 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z" />
  </svg>
);
export default SvgHeadset;
