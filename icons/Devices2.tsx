import * as React from "react";
import type { SVGProps } from "react";
const SvgDevices2 = ({
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
    className="icon icon-tabler icon-tabler-devices-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6M13 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zM7 19h3M17 8v.01" />
    <path d="M16 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 15v4" />
  </svg>
);
export default SvgDevices2;
