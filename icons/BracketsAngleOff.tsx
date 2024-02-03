import * as React from "react";
import type { SVGProps } from "react";
const SvgBracketsAngleOff = ({
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
    className="icon icon-tabler icon-tabler-brackets-angle-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 4h.01M6.453 6.474 3 12l5 8M16 4l5 8-1.917 3.067M17.535 17.544 16 20M3 3l18 18" />
  </svg>
);
export default SvgBracketsAngleOff;
