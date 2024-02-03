import * as React from "react";
import type { SVGProps } from "react";
const SvgDevicesPin = ({
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
    className="icon icon-tabler icon-tabler-devices-pin"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 14V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
    <path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8M21.121 20.121a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01M16 9h2" />
  </svg>
);
export default SvgDevicesPin;
