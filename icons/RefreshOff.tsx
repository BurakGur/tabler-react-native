import * as React from "react";
import type { SVGProps } from "react";
const SvgRefreshOff = ({
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
    className="icon icon-tabler icon-tabler-refresh-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 11A8.1 8.1 0 0 0 8.729 4.695m-2.41 1.624A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 13.671 4.691M20 16v-1h-1M3 3l18 18" />
  </svg>
);
export default SvgRefreshOff;
