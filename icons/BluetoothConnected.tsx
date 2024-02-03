import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothConnected = ({
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
    className="icon icon-tabler icon-tabler-bluetooth-connected"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 8 10 8-5 4V4l5 4-10 8M4 12h1M18 12h1" />
  </svg>
);
export default SvgBluetoothConnected;
