import * as React from "react";
import type { SVGProps } from "react";
const SvgUsb = ({
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
    className="icon icon-tabler icon-tabler-usb"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 17V5.5M7 10v3l5 3M12 14.5l5-2V10M16 10h2V8h-2z" />
    <path d="M6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M10 5.5h4L12 3z" />
  </svg>
);
export default SvgUsb;
