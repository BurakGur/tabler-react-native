import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceComputerCamera = ({
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
    className="icon icon-tabler icon-tabler-device-computer-camera"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
    <path d="M9 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0M8 16l-2.091 3.486A1 1 0 0 0 6.766 21h10.468a1 1 0 0 0 .857-1.514L16 16" />
  </svg>
);
export default SvgDeviceComputerCamera;
