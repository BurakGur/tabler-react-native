import * as React from "react";
import type { SVGProps } from "react";
const SvgBus = ({
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
    className="icon icon-tabler icon-tabler-bus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M4 17H2V6a1 1 0 0 1 1-1h14a5 7 0 0 1 5 7v5h-2m-4 0H8" />
    <path d="m16 5 1.5 7H22M2 10h15M7 5v5M12 5v5" />
  </svg>
);
export default SvgBus;
