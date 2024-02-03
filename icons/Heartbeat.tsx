import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartbeat = ({
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
    className="icon icon-tabler icon-tabler-heartbeat"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.5 13.572 12 21l-2.896-2.868m-6.117-8.104A5 5 0 0 1 12 7.006a5 5 0 1 1 7.5 6.572" />
    <path d="M3 13h2l2 3 2-6 1 3h3" />
  </svg>
);
export default SvgHeartbeat;
