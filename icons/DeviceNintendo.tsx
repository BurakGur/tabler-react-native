import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceNintendo = ({
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
    className="icon icon-tabler icon-tabler-device-nintendo"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4zM14 20V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4z" />
    <circle cx={17.5} cy={15.5} r={1} fill="currentColor" />
    <circle cx={6.5} cy={8.5} r={1} fill="currentColor" />
  </svg>
);
export default SvgDeviceNintendo;
