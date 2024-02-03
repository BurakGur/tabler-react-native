import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceUsb = ({
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
    className="icon icon-tabler icon-tabler-device-usb"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 8h8v9a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3zM10 8V4h4v4" />
  </svg>
);
export default SvgDeviceUsb;
