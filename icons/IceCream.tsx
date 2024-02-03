import * as React from "react";
import type { SVGProps } from "react";
const SvgIceCream = ({
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
    className="icon icon-tabler icon-tabler-ice-cream"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 21.5V17M8 17h8V7a4 4 0 1 0-8 0zM8 10.5 16 7M8 14.5l8-3.5" />
  </svg>
);
export default SvgIceCream;
