import * as React from "react";
import type { SVGProps } from "react";
const SvgClockCheck = ({
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
    className="icon icon-tabler icon-tabler-clock-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.942 13.021a9 9 0 1 0-9.407 7.967" />
    <path d="M12 7v5l3 3M15 19l2 2 4-4" />
  </svg>
);
export default SvgClockCheck;
