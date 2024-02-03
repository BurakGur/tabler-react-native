import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceImac = ({
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
    className="icon icon-tabler icon-tabler-device-imac"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM3 13h18M8 21h8M10 17l-.5 4M14 17l.5 4" />
  </svg>
);
export default SvgDeviceImac;
