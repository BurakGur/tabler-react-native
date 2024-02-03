import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationCode = ({
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
    className="icon icon-tabler icon-tabler-location-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.505 17.01 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.677 10.184M20 21l2-2-2-2M17 17l-2 2 2 2" />
  </svg>
);
export default SvgLocationCode;
