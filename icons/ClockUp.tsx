import * as React from "react";
import type { SVGProps } from "react";
const SvgClockUp = ({
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
    className="icon icon-tabler icon-tabler-clock-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.983 12.548a9 9 0 1 0-8.45 8.436M19 22v-6M22 19l-3-3-3 3" />
    <path d="M12 7v5l2.5 2.5" />
  </svg>
);
export default SvgClockUp;
