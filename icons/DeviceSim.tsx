import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceSim = ({
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
    className="icon icon-tabler icon-tabler-device-sim"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 3h8.5L19 7.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
    <path d="M9 11h3v6M15 17v.01M15 14v.01M15 11v.01M9 14v.01M9 17v.01" />
  </svg>
);
export default SvgDeviceSim;
