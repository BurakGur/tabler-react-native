import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceWatchPause = ({
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
    className="icon icon-tabler icon-tabler-device-watch-pause"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M9 18v3h4M9 6V3h6v3M17 17v5M21 17v5" />
  </svg>
);
export default SvgDeviceWatchPause;
