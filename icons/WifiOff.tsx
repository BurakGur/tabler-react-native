import * as React from "react";
import type { SVGProps } from "react";
const SvgWifiOff = ({
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
    className="icon icon-tabler icon-tabler-wifi-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 18h.01M9.172 15.172a4 4 0 0 1 5.656 0M6.343 12.343a7.96 7.96 0 0 1 3.864-2.14m4.163.155a7.97 7.97 0 0 1 3.287 2M3.515 9.515A12 12 0 0 1 7.059 7.06m3.101-.92a12 12 0 0 1 10.325 3.374M3 3l18 18" />
  </svg>
);
export default SvgWifiOff;
