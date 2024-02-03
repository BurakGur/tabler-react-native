import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarm = ({
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
    className="icon icon-tabler icon-tabler-alarm"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 13a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
    <path d="M12 10v3h2M7 4 4.25 6M17 4l2.75 2" />
  </svg>
);
export default SvgAlarm;
