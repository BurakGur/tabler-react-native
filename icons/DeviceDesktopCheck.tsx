import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceDesktopCheck = ({
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
    className="icon icon-tabler icon-tabler-device-desktop-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 16H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8M15 19l2 2 4-4M7 20h4M9 16v4" />
  </svg>
);
export default SvgDeviceDesktopCheck;
