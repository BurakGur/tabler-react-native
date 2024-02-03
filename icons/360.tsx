import * as React from "react";
import type { SVGProps } from "react";
const Svg360 = ({
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
    className="icon icon-tabler icon-tabler-360"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 15.328c2.414-.718 4-1.94 4-3.328 0-2.21-4.03-4-9-4s-9 1.79-9 4 4.03 4 9 4" />
    <path d="m9 13 3 3-3 3" />
  </svg>
);
export default Svg360;
