import * as React from "react";
import type { SVGProps } from "react";
const SvgFishHook = ({
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
    className="icon icon-tabler icon-tabler-fish-hook"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 9v6a5 5 0 0 1-10 0v-4l3 3" />
    <path d="M14 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 5V3" />
  </svg>
);
export default SvgFishHook;
