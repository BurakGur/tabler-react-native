import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceIpadUp = ({
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
    className="icon icon-tabler icon-tabler-device-ipad-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 18h3M19 22v-6M22 19l-3-3-3 3M13.5 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7" />
  </svg>
);
export default SvgDeviceIpadUp;
