import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceWatchCheck = ({
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
    className="icon icon-tabler icon-tabler-device-watch-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5.5M9 18v3h2.5M9 6V3h6v3M15 19l2 2 4-4" />
  </svg>
);
export default SvgDeviceWatchCheck;
