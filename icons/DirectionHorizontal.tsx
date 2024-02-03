import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionHorizontal = ({
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
    className="icon icon-tabler icon-tabler-direction-horizontal"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m10 9-3 3 3 3M14 9l3 3-3 3" />
  </svg>
);
export default SvgDirectionHorizontal;
