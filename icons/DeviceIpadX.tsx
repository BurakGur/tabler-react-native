import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceIpadX = ({
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
    className="icon icon-tabler icon-tabler-device-ipad-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m22 22-5-5M17 22l5-5M13 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9M9 18h4" />
  </svg>
);
export default SvgDeviceIpadX;
