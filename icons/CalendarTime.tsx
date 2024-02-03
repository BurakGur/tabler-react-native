import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarTime = ({
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
    className="icon icon-tabler icon-tabler-calendar-time"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.795 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
    <path d="M14 18a4 4 0 1 0 8 0 4 4 0 1 0-8 0M15 3v4M7 3v4M3 11h16" />
    <path d="M18 16.496V18l1 1" />
  </svg>
);
export default SvgCalendarTime;
