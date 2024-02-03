import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceAirtag = ({
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
    className="icon icon-tabler icon-tabler-device-airtag"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0M9 15v.01" />
    <path d="M15 15a6 6 0 0 0-6-6M12 15a3 3 0 0 0-3-3" />
  </svg>
);
export default SvgDeviceAirtag;
