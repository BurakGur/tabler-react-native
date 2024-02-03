import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceImacMinus = ({
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
    className="icon icon-tabler icon-tabler-device-imac-minus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.5 17H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v11M3 13h18M8 21h4.5M10 17l-.5 4M16 19h6" />
  </svg>
);
export default SvgDeviceImacMinus;
