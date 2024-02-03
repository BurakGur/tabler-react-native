import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationX = ({
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
    className="icon icon-tabler icon-tabler-navigation-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16.622 13.02 12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5l1.563.53M22 22l-5-5M17 22l5-5" />
  </svg>
);
export default SvgNavigationX;
