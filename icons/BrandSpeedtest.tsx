import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSpeedtest = ({
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
    className="icon icon-tabler icon-tabler-brand-speedtest"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.636 19.364a9 9 0 1 1 12.728 0M16 9l-4 4" />
  </svg>
);
export default SvgBrandSpeedtest;
