import * as React from "react";
import type { SVGProps } from "react";
const SvgPointOff = ({
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
    className="icon icon-tabler icon-tabler-point-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.15 9.194a4 4 0 0 0 5.697 5.617M16 12a4 4 0 0 0-4-4M3 3l18 18" />
  </svg>
);
export default SvgPointOff;
