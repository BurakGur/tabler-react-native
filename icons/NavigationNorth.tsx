import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationNorth = ({
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
    className="icon icon-tabler icon-tabler-navigation-north"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m16 21-4-8-4 8 4-2zM10 9V3l4 6V3" />
  </svg>
);
export default SvgNavigationNorth;
