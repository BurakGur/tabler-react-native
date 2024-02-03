import * as React from "react";
import type { SVGProps } from "react";
const SvgDevicesShare = ({
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
    className="icon icon-tabler icon-tabler-devices-share"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 15V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4" />
    <path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9M16 22l5-5M21 21.5V17h-4.5M16 9h2" />
  </svg>
);
export default SvgDevicesShare;
