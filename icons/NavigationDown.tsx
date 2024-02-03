import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationDown = ({
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
    className="icon icon-tabler icon-tabler-navigation-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16.528 12.815 12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5M19 16v6M22 19l-3 3-3-3" />
  </svg>
);
export default SvgNavigationDown;
