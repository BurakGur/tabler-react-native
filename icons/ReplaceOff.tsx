import * as React from "react";
import type { SVGProps } from "react";
const SvgReplaceOff = ({
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
    className="icon icon-tabler icon-tabler-replace-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 3h1a1 1 0 0 1 1 1v1m-.303 3.717A1 1 0 0 1 8 9H4a1 1 0 0 1-1-1V4c0-.28.115-.532.3-.714M19 15h1a1 1 0 0 1 1 1v1m-.303 3.717A1 1 0 0 1 20 21h-4a1 1 0 0 1-1-1v-4c0-.28.115-.532.3-.714M21 11V8a2 2 0 0 0-2-2h-6l3 3m0-6-3 3M3 13v3a2 2 0 0 0 2 2h6l-3-3m0 6 3-3M3 3l18 18" />
  </svg>
);
export default SvgReplaceOff;
