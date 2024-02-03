import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone2Off = ({
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
    className="icon icon-tabler icon-tabler-microphone-2-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16.908 12.917a5 5 0 1 0-5.827-5.819M10.116 10.125l-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461-6.529M3 3l18 18" />
  </svg>
);
export default SvgMicrophone2Off;
