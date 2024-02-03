import * as React from "react";
import type { SVGProps } from "react";
const SvgActivityHeartbeat = ({
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
    className="icon icon-tabler icon-tabler-activity-heartbeat"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12h4.5L9 6l4 12 2-9 1.5 3H21" />
  </svg>
);
export default SvgActivityHeartbeat;
