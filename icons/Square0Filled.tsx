import * as React from "react";
import type { SVGProps } from "react";
const SvgSquare0Filled = ({
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
    className="icon icon-tabler icon-tabler-square-0-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM12 7a3 3 0 0 0-2.995 2.824L9 10v4l.005.176a3 3 0 0 0 5.99 0L15 14v-4l-.005-.176A3 3 0 0 0 12 7m0 2a1 1 0 0 1 .993.883L13 10v4l-.007.117a1 1 0 0 1-1.986 0L11 14v-4l.007-.117A1 1 0 0 1 12 9"
    />
  </svg>
);
export default SvgSquare0Filled;
