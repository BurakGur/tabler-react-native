import * as React from "react";
import type { SVGProps } from "react";
const SvgSignal3G = ({
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
    className="icon icon-tabler icon-tabler-signal-3g"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1M6 8h2.5A1.5 1.5 0 0 1 10 9.5v1A1.5 1.5 0 0 1 8.5 12H7h1.5a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 16H6" />
  </svg>
);
export default SvgSignal3G;
