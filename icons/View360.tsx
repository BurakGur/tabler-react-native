import * as React from "react";
import type { SVGProps } from "react";
const SvgView360 = ({
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
    className="icon icon-tabler icon-tabler-view-360"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M8 12a4 9 0 1 0 8 0 4 9 0 1 0-8 0" />
    <path d="M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4-4.03-4-9-4-9 1.79-9 4" />
  </svg>
);
export default SvgView360;
