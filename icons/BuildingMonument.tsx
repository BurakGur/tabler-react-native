import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingMonument = ({
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
    className="icon icon-tabler icon-tabler-building-monument"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 18 2-13 2-2 2 2 2 13M5 21v-3h14v3M3 21h18" />
  </svg>
);
export default SvgBuildingMonument;
