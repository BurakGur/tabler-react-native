import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmPlusFilled = ({
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
    className="icon icon-tabler icon-tabler-alarm-plus-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M16 6.072a8 8 0 1 1-11.995 7.213L4 13l.005-.285A8 8 0 0 1 16 6.072M12 10a1 1 0 0 0-1 1v1h-1l-.117.007A1 1 0 0 0 10 14h1v1l.007.117A1 1 0 0 0 13 15v-1h1l.117-.007A1 1 0 0 0 14 12h-1v-1l-.007-.117A1 1 0 0 0 12 10"
    />
    <path
      fill="currentColor"
      stroke="none"
      d="M6.412 3.191A1 1 0 0 1 7.685 4.73l-.097.08-2.75 2a1 1 0 0 1-1.273-1.54l.097-.08 2.75-2zM16.191 3.412a1 1 0 0 1 1.291-.288l.106.067 2.75 2a1 1 0 0 1-1.07 1.685l-.106-.067-2.75-2a1 1 0 0 1-.22-1.397z"
    />
  </svg>
);
export default SvgAlarmPlusFilled;
