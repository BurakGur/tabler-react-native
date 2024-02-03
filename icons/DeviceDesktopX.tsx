import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceDesktopX = ({
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
    className="icon icon-tabler icon-tabler-device-desktop-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 16H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8M7 20h6.5M9 16v4M22 22l-5-5M17 22l5-5" />
  </svg>
);
export default SvgDeviceDesktopX;
