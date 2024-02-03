import * as React from "react";
import type { SVGProps } from "react";
const SvgBike = ({
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
    className="icon icon-tabler icon-tabler-bike"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M12 19v-4l-3-3 5-4 2 3h3M16 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgBike;
