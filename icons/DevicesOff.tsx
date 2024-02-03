import * as React from "react";
import type { SVGProps } from "react";
const SvgDevicesOff = ({
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
    className="icon icon-tabler icon-tabler-devices-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8m-1 3h-6a1 1 0 0 1-1-1v-6M18 8V5a1 1 0 0 0-1-1H8M4 4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9M16 9h2M3 3l18 18" />
  </svg>
);
export default SvgDevicesOff;
