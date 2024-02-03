import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceTabletDown = ({
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
    className="icon icon-tabler icon-tabler-device-tablet-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.5 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8M19 16v6M22 19l-3 3-3-3" />
    <path d="M11 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
  </svg>
);
export default SvgDeviceTabletDown;
