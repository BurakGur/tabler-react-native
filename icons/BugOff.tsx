import * as React from "react";
import type { SVGProps } from "react";
const SvgBugOff = ({
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
    className="icon icon-tabler icon-tabler-bug-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.884 5.873A3 3 0 0 1 15 8v1M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705A5 5 0 0 1 7 15v-3a6 6 0 0 1 1-3h1M3 13h4M17 13h4M12 20v-6M4 19l3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4M3 3l18 18" />
  </svg>
);
export default SvgBugOff;
