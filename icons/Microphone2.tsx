import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone2 = ({
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
    className="icon icon-tabler icon-tabler-microphone-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 12.9A5 5 0 1 0 11.098 9M15 12.9l-3.902-3.899-7.513 8.584a2 2 0 1 0 2.827 2.83z" />
  </svg>
);
export default SvgMicrophone2;
