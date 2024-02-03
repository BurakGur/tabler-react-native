import * as React from "react";
import type { SVGProps } from "react";
const SvgClockStop = ({
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
    className="icon icon-tabler icon-tabler-clock-stop"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 12a9 9 0 1 0-9 9" />
    <path d="M12 7v5l1 1M16 16h6v6h-6z" />
  </svg>
);
export default SvgClockStop;
