import * as React from "react";
import type { SVGProps } from "react";
const SvgTopologyRing3 = ({
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
    className="icon icon-tabler icon-tabler-topology-ring-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M20 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M20 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 8v8M18 16V8M8 6h8M16 18H8" />
  </svg>
);
export default SvgTopologyRing3;
