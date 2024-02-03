import * as React from "react";
import type { SVGProps } from "react";
const SvgChecks = ({
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
    className="icon icon-tabler icon-tabler-checks"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 12 5 5L22 7M2 12l5 5m5-5 5-5" />
  </svg>
);
export default SvgChecks;
