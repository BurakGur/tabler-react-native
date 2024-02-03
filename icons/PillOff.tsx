import * as React from "react";
import type { SVGProps } from "react";
const SvgPillOff = ({
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
    className="icon icon-tabler icon-tabler-pill-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m10.495 6.505 2-2a4.95 4.95 0 0 1 7 7l-2 2m-2 2-4 4a4.95 4.95 0 0 1-7-7l4-4M8.5 8.5l7 7M3 3l18 18" />
  </svg>
);
export default SvgPillOff;
