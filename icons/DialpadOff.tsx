import * as React from "react";
import type { SVGProps } from "react";
const SvgDialpadOff = ({
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
    className="icon icon-tabler icon-tabler-dialpad-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 7H3V3M17 3h4v4h-4zM10 6V3h4v4h-3M3 10h4v4H3zM17 13v-3h4v4h-3M14 14h-4v-4M10 17h4v4h-4zM3 3l18 18" />
  </svg>
);
export default SvgDialpadOff;
