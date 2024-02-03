import * as React from "react";
import type { SVGProps } from "react";
const SvgKering = ({
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
    className="icon icon-tabler icon-tabler-kering"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 15v-3.5a2.5 2.5 0 1 1 5 0V15m0-2h-5M3 9l3 6 3-6M9 20l6-16" />
  </svg>
);
export default SvgKering;
