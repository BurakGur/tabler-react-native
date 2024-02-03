import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglassFilled = ({
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
    className="icon icon-tabler icon-tabler-hourglass-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M17 2a2 2 0 0 1 1.995 1.85L19 4v2a7 7 0 0 1-3.393 6 7 7 0 0 1 3.388 5.728L19 18v2a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20v-2a7 7 0 0 1 3.393-6 7 7 0 0 1-3.388-5.728L5 6V4a2 2 0 0 1 1.85-1.995L7 2z"
    />
  </svg>
);
export default SvgHourglassFilled;
