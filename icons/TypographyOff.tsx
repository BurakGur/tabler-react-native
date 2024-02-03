import * as React from "react";
import type { SVGProps } from "react";
const SvgTypographyOff = ({
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
    className="icon icon-tabler icon-tabler-typography-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 20h3M14 20h6M6.9 15h6.9M13 13l3 7M5 20 9.09 9.094M10.181 6.183 11 4h2l3.904 8.924M3 3l18 18" />
  </svg>
);
export default SvgTypographyOff;
