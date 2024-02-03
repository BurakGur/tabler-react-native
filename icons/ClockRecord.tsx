import * as React from "react";
import type { SVGProps } from "react";
const SvgClockRecord = ({
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
    className="icon icon-tabler icon-tabler-clock-record"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 12.3a9 9 0 1 0-8.683 8.694" />
    <path d="M12 7v5l2 2M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </svg>
);
export default SvgClockRecord;
