import * as React from "react";
import type { SVGProps } from "react";
const SvgGaugeOff = ({
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
    className="icon icon-tabler icon-tabler-gauge-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.038 16.052A9 9 0 0 0 7.971 3.95M5.638 5.636a9 9 0 1 0 12.73 12.726" />
    <path d="M11.283 11.303a1 1 0 0 0 1.419 1.41M14 10l2-2M7 12c0-1.386.564-2.64 1.475-3.546m2.619-1.372Q11.536 7.001 12 7M3 3l18 18" />
  </svg>
);
export default SvgGaugeOff;
