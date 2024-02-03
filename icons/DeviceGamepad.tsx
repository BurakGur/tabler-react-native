import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceGamepad = ({
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
    className="icon icon-tabler icon-tabler-device-gamepad"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM6 12h4m-2-2v4M15 11v.01M18 13v.01" />
  </svg>
);
export default SvgDeviceGamepad;
