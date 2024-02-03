import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceWatchSearch = ({
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
    className="icon icon-tabler icon-tabler-device-watch-search"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22M9 18v3h3M9 6V3h6v3" />
  </svg>
);
export default SvgDeviceWatchSearch;
