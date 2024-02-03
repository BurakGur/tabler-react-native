import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingFactory2 = ({
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
    className="icon icon-tabler icon-tabler-building-factory-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 21h18M5 21V9l5 4V9l5 4h4" />
    <path d="M19 21v-8l-1.436-9.574A.5.5 0 0 0 17.069 3h-1.145a.5.5 0 0 0-.494.418L14 12M9 17h1M14 17h1" />
  </svg>
);
export default SvgBuildingFactory2;
