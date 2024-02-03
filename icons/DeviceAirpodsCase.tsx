import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceAirpodsCase = ({
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
    className="icon icon-tabler icon-tabler-device-airpods-case"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 10H3M3 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
    <path d="M7 10v1.5A1.5 1.5 0 0 0 8.5 13h7a1.5 1.5 0 0 0 1.5-1.5V10" />
  </svg>
);
export default SvgDeviceAirpodsCase;
