import * as React from "react";
import type { SVGProps } from "react";
const SvgRouteScan = ({
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
    className="icon icon-tabler icon-tabler-route-scan"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2M7 12V9h3M14 9h3v3" />
    <path d="m7 9 4.414 4.414A2 2 0 0 1 12 14.828V17M17 9l-4.414 4.414A2 2 0 0 0 12 14.828V17" />
  </svg>
);
export default SvgRouteScan;
