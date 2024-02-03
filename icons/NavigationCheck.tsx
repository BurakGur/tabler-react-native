import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationCheck = ({
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
    className="icon icon-tabler icon-tabler-navigation-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17.487 14.894 12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116l6.275-2.127M15 19l2 2 4-4" />
  </svg>
);
export default SvgNavigationCheck;
