import * as React from "react";
import type { SVGProps } from "react";
const SvgInfinityOff = ({
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
    className="icon icon-tabler icon-tabler-infinity-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8.165 8.174A4 4 0 0 0 2.999 12a4 4 0 0 0 6.829 2.828A10 10 0 0 0 12 12m1.677-2.347a10 10 0 0 1 .495-.481 4 4 0 1 1 5.129 6.1m-3.521.537a4 4 0 0 1-1.608-.981A10 10 0 0 1 12 12M3 3l18 18" />
  </svg>
);
export default SvgInfinityOff;
