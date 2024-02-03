import * as React from "react";
import type { SVGProps } from "react";
const SvgSignal4G = ({
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
    className="icon icon-tabler icon-tabler-signal-4g"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 8v3a1 1 0 0 0 1 1h3M10 8v8M17 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
  </svg>
);
export default SvgSignal4G;
