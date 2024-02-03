import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothX = ({
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
    className="icon icon-tabler icon-tabler-bluetooth-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 8 10 8-5 4V4l1 .802m0 6.396L7 16M16 6l4 4M20 6l-4 4" />
  </svg>
);
export default SvgBluetoothX;
