import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceAnalytics = ({
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
    className="icon icon-tabler icon-tabler-device-analytics"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM7 20h10M9 16v4M15 16v4" />
    <path d="m8 12 3-3 2 2 3-3" />
  </svg>
);
export default SvgDeviceAnalytics;
