import * as React from "react";
import type { SVGProps } from "react";
const SvgBroadcast = ({
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
    className="icon icon-tabler icon-tabler-broadcast"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.364 19.364a9 9 0 1 0-12.728 0" />
    <path d="M15.536 16.536a5 5 0 1 0-7.072 0" />
    <path d="M11 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgBroadcast;
