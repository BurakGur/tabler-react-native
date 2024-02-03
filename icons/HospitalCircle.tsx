import * as React from "react";
import type { SVGProps } from "react";
const SvgHospitalCircle = ({
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
    className="icon icon-tabler icon-tabler-hospital-circle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 16V8M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M14 16V8M10 12h4" />
  </svg>
);
export default SvgHospitalCircle;
