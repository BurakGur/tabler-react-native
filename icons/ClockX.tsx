import * as React from "react";
import type { SVGProps } from "react";
const SvgClockX = ({
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
    className="icon icon-tabler icon-tabler-clock-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.926 13.15a9 9 0 1 0-7.835 7.784" />
    <path d="M12 7v5l2 2M22 22l-5-5M17 22l5-5" />
  </svg>
);
export default SvgClockX;
