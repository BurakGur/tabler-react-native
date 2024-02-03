import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceNintendoOff = ({
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
    className="icon icon-tabler icon-tabler-device-nintendo-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.713 4.718A4 4 0 0 0 3 8v8a4 4 0 0 0 4 4h3V10m0-4V4H8M14 10V4h3a4 4 0 0 1 4 4v8q-.001.463-.1.896m-1.62 2.39A4 4 0 0 1 17 20h-3v-6" />
    <path d="M5.5 8.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" />
  </svg>
);
export default SvgDeviceNintendoOff;
