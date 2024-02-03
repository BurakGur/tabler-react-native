import * as React from "react";
import type { SVGProps } from "react";
const SvgBrightnessHalf = ({
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
    className="icon icon-tabler icon-tabler-brightness-half"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 9a3 3 0 0 0 0 6z" />
    <path d="M6 6h3.5L12 3.5 14.5 6H18v3.5l2.5 2.5-2.5 2.5V18h-3.5L12 20.5 9.5 18H6v-3.5L3.5 12 6 9.5z" />
  </svg>
);
export default SvgBrightnessHalf;
