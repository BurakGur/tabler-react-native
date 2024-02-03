import * as React from "react";
import type { SVGProps } from "react";
const SvgColorPickerOff = ({
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
    className="icon icon-tabler icon-tabler-color-picker-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m11 7 6 6M12 8l3.699-3.699a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-3.702 3.702m-2 2-6 6h-4v-4l6-6M3 3l18 18" />
  </svg>
);
export default SvgColorPickerOff;
