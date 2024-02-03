import * as React from "react";
import type { SVGProps } from "react";
const SvgCircle0Filled = ({
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
    className="icon icon-tabler icon-tabler-circle-0-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 5a3 3 0 0 0-2.995 2.824L9 10v4l.005.176a3 3 0 0 0 5.99 0L15 14v-4l-.005-.176A3 3 0 0 0 12 7m0 2a1 1 0 0 1 .993.883L13 10v4l-.007.117a1 1 0 0 1-1.986 0L11 14v-4l.007-.117A1 1 0 0 1 12 9"
    />
  </svg>
);
export default SvgCircle0Filled;
