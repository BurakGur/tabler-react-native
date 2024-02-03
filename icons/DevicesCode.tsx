import * as React from "react";
import type { SVGProps } from "react";
const SvgDevicesCode = ({
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
    className="icon icon-tabler icon-tabler-devices-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 15.5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4m0 6a1 1 0 0 1-1 1" />
    <path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7M20 21l2-2-2-2M17 17l-2 2 2 2M16 9h2" />
  </svg>
);
export default SvgDevicesCode;
