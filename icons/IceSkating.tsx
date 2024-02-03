import * as React from "react";
import type { SVGProps } from "react";
const SvgIceSkating = ({
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
    className="icon icon-tabler icon-tabler-ice-skating"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.905 5h3.418a1 1 0 0 1 .928.629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717.926A2.084 2.084 0 0 1 20 13.286V14a1 1 0 0 1-1 1H5.105a1 1 0 0 1-1-1.1l.8-8a1 1 0 0 1 1-.9M3 19h17a1 1 0 0 0 1-1M9 15v4M15 15v4" />
  </svg>
);
export default SvgIceSkating;
