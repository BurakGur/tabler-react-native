import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothOff = ({
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
    className="icon icon-tabler icon-tabler-bluetooth-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 3 18 18M16.438 16.45 12 20v-8m0-4V4l5 4-2.776 2.22m-2.222 1.779-5 4" />
  </svg>
);
export default SvgBluetoothOff;
