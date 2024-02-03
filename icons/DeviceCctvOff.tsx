import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceCctvOff = ({
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
    className="icon icon-tabler icon-tabler-device-cctv-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 7H4a1 1 0 0 1-1-1V4c0-.275.11-.523.29-.704M7 3h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-9M10.36 10.35a4 4 0 1 0 5.285 5.3" />
    <path d="M19 7v7q0 .482-.064.947m-1.095 2.913A7 7 0 0 1 5 14V7M12 14h.01M3 3l18 18" />
  </svg>
);
export default SvgDeviceCctvOff;
