import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceIpad = ({
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
    className="icon icon-tabler icon-tabler-device-ipad"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 2a3 3 0 0 1 2.995 2.824L21 5v14a3 3 0 0 1-2.824 2.995L18 22H6a3 3 0 0 1-2.995-2.824L3 19V5a3 3 0 0 1 2.824-2.995L6 2zm-3 15H9l-.117.007a1 1 0 0 0 0 1.986L9 19h6l.117-.007a1 1 0 0 0 0-1.986z" />
  </svg>
);
export default SvgDeviceIpad;
