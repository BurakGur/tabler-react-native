import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceMobileX = ({
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
    className="icon icon-tabler icon-tabler-device-mobile-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8M22 22l-5-5M17 22l5-5M11 4h2M12 17v.01" />
  </svg>
);
export default SvgDeviceMobileX;
