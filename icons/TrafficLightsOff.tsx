import * as React from "react";
import type { SVGProps } from "react";
const SvgTrafficLightsOff = ({
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
    className="icon icon-tabler icon-tabler-traffic-lights-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 4c.912-1.219 2.36-2 4-2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1-10 0V7" />
    <path d="M12 8a1 1 0 1 0-1-1M11.291 11.295a1 1 0 0 0 1.418 1.41M11 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" />
  </svg>
);
export default SvgTrafficLightsOff;
