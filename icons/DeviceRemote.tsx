import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceRemote = ({
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
    className="icon icon-tabler icon-tabler-device-remote"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M7 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM12 3v2M10 15v.01M10 18v.01M14 18v.01M14 15v.01" />
  </svg>
);
export default SvgDeviceRemote;
