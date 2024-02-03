import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeedboat = ({
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
    className="icon icon-tabler icon-tabler-speedboat"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 17h13.4a3 3 0 0 0 2.5-1.34L22 11h0-6.23a4 4 0 0 0-1.49.29l-3.56 1.42a4 4 0 0 1-1.49.29H5.5h0-1zM6 13l1.5-5" />
    <path d="M6 8h8l2 3" />
  </svg>
);
export default SvgSpeedboat;
