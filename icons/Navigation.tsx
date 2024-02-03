import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigation = ({
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
    className="icon icon-tabler icon-tabler-navigation"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 18.5 7.265 2.463c.196.077.42.032.57-.116a.55.55 0 0 0 .134-.572L12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116z" />
  </svg>
);
export default SvgNavigation;
