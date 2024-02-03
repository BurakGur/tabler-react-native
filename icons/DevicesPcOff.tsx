import * as React from "react";
import type { SVGProps } from "react";
const SvgDevicesPcOff = ({
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
    className="icon icon-tabler icon-tabler-devices-pc-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 9v10H3V5h2M13 9h9v7h-2m-4 0h-4v-4M14 19h5M17 17v2M6 13v.01M6 16v.01M3 3l18 18" />
  </svg>
);
export default SvgDevicesPcOff;
