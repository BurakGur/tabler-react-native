import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleOff = ({
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
    className="icon icon-tabler icon-tabler-circle-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.042 16.045A9 9 0 0 0 7.955 3.958M5.637 5.635a9 9 0 1 0 12.725 12.73M3 3l18 18" />
  </svg>
);
export default SvgCircleOff;
