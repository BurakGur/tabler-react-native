import * as React from "react";
import type { SVGProps } from "react";
const SvgTrafficConeOff = ({
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
    className="icon icon-tabler icon-tabler-traffic-cone-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 20h16M9.4 10h.6m4 0h.6M7.8 15H15M6 20 9.5 9.5M10.5 6.5 11 5h2l2 6m2 6 1 3M3 3l18 18" />
  </svg>
);
export default SvgTrafficConeOff;
