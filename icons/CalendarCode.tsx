import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarCode = ({
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
    className="icon icon-tabler icon-tabler-calendar-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.5 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M16 3v4M8 3v4M4 11h16M20 21l2-2-2-2M17 17l-2 2 2 2" />
  </svg>
);
export default SvgCalendarCode;
