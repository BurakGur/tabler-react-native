import * as React from "react";
import type { SVGProps } from "react";
const SvgRadioactiveOff = ({
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
    className="icon icon-tabler icon-tabler-radioactive-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14.118 14.127q-.275.273-.618.473l3 5.19a9 9 0 0 0 1.856-1.423m1.68-2.32A9 9 0 0 0 21 12h-5M13.5 9.4l3-5.19a9 9 0 0 0-8.536-.25M10.5 14.6l-3 5.19A9 9 0 0 1 3 12h6a3 3 0 0 0 1.5 2.6M3 3l18 18" />
  </svg>
);
export default SvgRadioactiveOff;
