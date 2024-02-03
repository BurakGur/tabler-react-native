import * as React from "react";
import type { SVGProps } from "react";
const SvgClockBolt = ({
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
    className="icon icon-tabler icon-tabler-clock-bolt"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.984 12.53a9 9 0 1 0-7.552 8.355" />
    <path d="M12 7v5l3 3M19 16l-2 3h4l-2 3" />
  </svg>
);
export default SvgClockBolt;
