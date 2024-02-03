import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceSdCard = ({
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
    className="icon icon-tabler icon-tabler-device-sd-card"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-6.172a2 2 0 0 0-1.414.586L5.586 7.414A2 2 0 0 0 5 8.828V19a2 2 0 0 0 2 2M13 6v2M16 6v2M10 7v1" />
  </svg>
);
export default SvgDeviceSdCard;
