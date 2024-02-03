import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceIpadOff = ({
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
    className="icon icon-tabler icon-tabler-device-ipad-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 2h12a2 2 0 0 1 2 2v12m0 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4M9 19h6M3 3l18 18" />
  </svg>
);
export default SvgDeviceIpadOff;
