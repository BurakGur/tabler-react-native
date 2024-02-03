import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarClock = ({
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
    className="icon icon-tabler icon-tabler-calendar-clock"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10.5 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M16 3v4M8 3v4M4 11h10" />
    <path d="M14 18a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <path d="M18 16.5V18l.5.5" />
  </svg>
);
export default SvgCalendarClock;
