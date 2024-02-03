import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryFilled = ({
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
    className="icon icon-tabler icon-tabler-battery-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M17 6a3 3 0 0 1 2.995 2.824L20 9v.086l.052.019a1.5 1.5 0 0 1 .941 1.25L21 10.5v3a1.5 1.5 0 0 1-.948 1.395l-.052.018V15a3 3 0 0 1-2.824 2.995L17 18H6a3 3 0 0 1-2.995-2.824L3 15V9a3 3 0 0 1 2.824-2.995L6 6z"
    />
  </svg>
);
export default SvgBatteryFilled;
