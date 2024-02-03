import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceImacOff = ({
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
    className="icon icon-tabler icon-tabler-device-imac-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 3h13a1 1 0 0 1 1 1v12c0 .28-.115.532-.3.713M17 17H4a1 1 0 0 1-1-1V4c0-.276.112-.526.293-.707M3 13h10m4 0h4M8 21h8M10 17l-.5 4M14 17l.5 4M3 3l18 18" />
  </svg>
);
export default SvgDeviceImacOff;
