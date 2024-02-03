import * as React from "react";
import type { SVGProps } from "react";
const SvgRoadOff = ({
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
    className="icon icon-tabler icon-tabler-road-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 19 7.332 7.339M16 5l2.806 9.823M12 8V6M12 13v-1M12 18v-2M3 3l18 18" />
  </svg>
);
export default SvgRoadOff;
