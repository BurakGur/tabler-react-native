import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitGround = ({
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
    className="icon icon-tabler icon-tabler-circuit-ground"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 13V5M4 13h16M7 16h10M10 19h4" />
  </svg>
);
export default SvgCircuitGround;
