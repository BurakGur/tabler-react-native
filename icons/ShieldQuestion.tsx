import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldQuestion = ({
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
    className="icon icon-tabler icon-tabler-shield-question"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15.065 19.732c-.95.557-1.98.986-3.065 1.268A12 12 0 0 1 3.5 6 12 12 0 0 0 12 3a12 12 0 0 0 8.5 3c.51 1.738.617 3.55.333 5.303M19 22v.01" />
    <path d="M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </svg>
);
export default SvgShieldQuestion;
