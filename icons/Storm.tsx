import * as React from "react";
import type { SVGProps } from "react";
const SvgStorm = ({
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
    className="icon icon-tabler icon-tabler-storm"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
    <path d="M5.369 14.236C3.53 10.307 3.808 6.62 4.665 3M18.63 9.76c1.837 3.928 1.561 7.615.703 11.236" />
  </svg>
);
export default SvgStorm;
