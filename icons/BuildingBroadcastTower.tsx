import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingBroadcastTower = ({
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
    className="icon icon-tabler icon-tabler-building-broadcast-tower"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <path d="M16.616 13.924a5 5 0 1 0-9.23 0" />
    <path d="M20.307 15.469a9 9 0 1 0-16.615 0" />
    <path d="m9 21 3-9 3 9M10 19h4" />
  </svg>
);
export default SvgBuildingBroadcastTower;
