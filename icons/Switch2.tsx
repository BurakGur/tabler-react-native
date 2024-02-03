import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitch2 = ({
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
    className="icon icon-tabler icon-tabler-switch-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 17h5l1.67-2.386m3.66-5.227L15 7h6" />
    <path d="m18 4 3 3-3 3M3 7h5l7 10h6" />
    <path d="m18 20 3-3-3-3" />
  </svg>
);
export default SvgSwitch2;
