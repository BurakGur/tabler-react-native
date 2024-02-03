import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitDiodeZener = ({
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
    className="icon icon-tabler icon-tabler-circuit-diode-zener"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M22 12h-6M2 12h6M8 7l8 5-8 5z" />
    <path d="M14 7h2v10h2" />
  </svg>
);
export default SvgCircuitDiodeZener;
