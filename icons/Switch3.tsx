import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitch3 = ({
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
    className="icon icon-tabler icon-tabler-switch-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 17h2.397a5 5 0 0 0 4.096-2.133l.177-.253m3.66-5.227.177-.254A5 5 0 0 1 17.603 7H21" />
    <path d="m18 4 3 3-3 3M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734A5 5 0 0 0 17.603 17H21" />
    <path d="m18 20 3-3-3-3" />
  </svg>
);
export default SvgSwitch3;
