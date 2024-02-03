import * as React from "react";
import type { SVGProps } from "react";
const SvgBusStop = ({
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
    className="icon icon-tabler icon-tabler-bus-stop"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2M16 17H8" />
    <path d="m16 5 1.5 7H22M9.5 10H17M12 5v5M5 9v11" />
  </svg>
);
export default SvgBusStop;
