import * as React from "react";
import type { SVGProps } from "react";
const SvgAccessible = ({
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
    className="icon icon-tabler icon-tabler-accessible"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="m10 16.5 2-3 2 3m-2-3v-2l3-1m-6 0 3 1" />
    <circle cx={12} cy={7.5} r={0.5} fill="currentColor" />
  </svg>
);
export default SvgAccessible;
