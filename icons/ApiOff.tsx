import * as React from "react";
import type { SVGProps } from "react";
const SvgApiOff = ({
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
    className="icon icon-tabler icon-tabler-api-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 13h5M12 16v-4m0-4h3a2 2 0 0 1 2 2v1c0 .554-.225 1.055-.589 1.417M13 13h-1M20 8v8M9 16v-5.5a2.5 2.5 0 0 0-5 0V16M3 3l18 18" />
  </svg>
);
export default SvgApiOff;
