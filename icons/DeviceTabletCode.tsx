import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceTabletCode = ({
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
    className="icon icon-tabler icon-tabler-device-tablet-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.5 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9" />
    <path d="M12.344 16.06a1 1 0 0 0-1.07 1.627M20 21l2-2-2-2M17 17l-2 2 2 2" />
  </svg>
);
export default SvgDeviceTabletCode;
