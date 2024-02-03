import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitResistor = ({
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
    className="icon icon-tabler icon-tabler-circuit-resistor"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 12h2l2-5 3 10 3-10 3 10 3-10 1.5 5H22" />
  </svg>
);
export default SvgCircuitResistor;
