import * as React from "react";
import type { SVGProps } from "react";
const SvgVersionsOff = ({
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
    className="icon icon-tabler icon-tabler-versions-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10.184 6.162A2 2 0 0 1 12 5h6a2 2 0 0 1 2 2v9m-1.185 2.827A2 2 0 0 1 18 19h-6a2 2 0 0 1-2-2v-7M7 7v10M4 8v8M3 3l18 18" />
  </svg>
);
export default SvgVersionsOff;
