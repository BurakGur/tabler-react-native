import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceGamepad3 = ({
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
    className="icon icon-tabler icon-tabler-device-gamepad-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 12 7 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zM14 12l3-3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2zM12 14l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2zM12 10 9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2z" />
  </svg>
);
export default SvgDeviceGamepad3;
