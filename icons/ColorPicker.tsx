import * as React from "react";
import type { SVGProps } from "react";
const SvgColorPicker = ({
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
    className="icon icon-tabler icon-tabler-color-picker"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m11 7 6 6M4 16 15.7 4.3a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4L8 20H4z" />
  </svg>
);
export default SvgColorPicker;
