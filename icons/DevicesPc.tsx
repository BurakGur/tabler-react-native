import * as React from "react";
import type { SVGProps } from "react";
const SvgDevicesPc = ({
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
    className="icon icon-tabler icon-tabler-devices-pc"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 5h6v14H3zM12 9h10v7H12zM14 19h6M17 16v3M6 13v.01M6 16v.01" />
  </svg>
);
export default SvgDevicesPc;
