import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitAmmeter = ({
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
    className="icon icon-tabler icon-tabler-circuit-ammeter"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0M5 12H2M19 12h3" />
    <path d="M10 14v-3c0-1.036.895-2 2-2s2 .964 2 2v3M14 12h-4" />
  </svg>
);
export default SvgCircuitAmmeter;
