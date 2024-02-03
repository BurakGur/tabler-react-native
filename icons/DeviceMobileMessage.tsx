import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceMobileMessage = ({
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
    className="icon icon-tabler icon-tabler-device-mobile-message"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 3h10v8h-3l-4 2v-2h-3z" />
    <path d="M15 16v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2M10 18v.01" />
  </svg>
);
export default SvgDeviceMobileMessage;
