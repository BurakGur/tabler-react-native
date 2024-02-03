import * as React from "react";
import type { SVGProps } from "react";
const SvgColumnsOff = ({
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
    className="icon icon-tabler icon-tabler-columns-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6h2M4 10h5.5M4 14h5.5M4 18h5.5M14.5 6H20M14.5 10H20M18 14h2M14.5 18H18M3 3l18 18" />
  </svg>
);
export default SvgColumnsOff;
