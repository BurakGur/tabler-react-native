import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitPushbutton = ({
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
    className="icon icon-tabler icon-tabler-circuit-pushbutton"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 17h2M20 17h2M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 11h12M12 11V5" />
  </svg>
);
export default SvgCircuitPushbutton;
