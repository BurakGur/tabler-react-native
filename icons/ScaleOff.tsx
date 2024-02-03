import * as React from "react";
import type { SVGProps } from "react";
const SvgScaleOff = ({
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
    className="icon icon-tabler icon-tabler-scale-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 20h10M9.452 5.425 12 5l6 1M12 3v5m0 4v8M9 12 6 6l-3 6a3 3 0 0 0 6 0M18.873 14.871A3 3 0 0 0 21 12l-3-6-2.677 5.355M3 3l18 18" />
  </svg>
);
export default SvgScaleOff;
