import * as React from "react";
import type { SVGProps } from "react";
const SvgBulbOff = ({
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
    className="icon icon-tabler icon-tabler-bulb-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7-.7.7M11.089 7.083a5 5 0 0 1 5.826 5.84m-1.378 2.611A5 5 0 0 1 15 16a3.5 3.5 0 0 0-1 3 2 2 0 1 1-4 0 3.5 3.5 0 0 0-1-3 5 5 0 0 1-.528-7.544M9.7 17h4.6M3 3l18 18" />
  </svg>
);
export default SvgBulbOff;
