import * as React from "react";
import type { SVGProps } from "react";
const SvgTopologyRing2 = ({
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
    className="icon icon-tabler icon-tabler-topology-ring-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M21 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 18h10M18 16l-5-8M11 8l-5 8" />
  </svg>
);
export default SvgTopologyRing2;
