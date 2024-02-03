import * as React from "react";
import type { SVGProps } from "react";
const SvgBedOff = ({
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
    className="icon icon-tabler icon-tabler-bed-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 7a2 2 0 1 0 2 2M22 17v-3h-4m-4 0H2M2 8v9M12 12v2h2m4 0h4v-2a3 3 0 0 0-3-3h-6M3 3l18 18" />
  </svg>
);
export default SvgBedOff;
