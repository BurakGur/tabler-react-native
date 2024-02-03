import * as React from "react";
import type { SVGProps } from "react";
const SvgUmbrella = ({
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
    className="icon icon-tabler icon-tabler-umbrella"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 12a8 8 0 0 1 16 0zM12 12v6a2 2 0 0 0 4 0" />
  </svg>
);
export default SvgUmbrella;
