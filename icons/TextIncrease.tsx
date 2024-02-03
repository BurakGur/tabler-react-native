import * as React from "react";
import type { SVGProps } from "react";
const SvgTextIncrease = ({
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
    className="icon icon-tabler icon-tabler-text-increase"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 19V8.5a3.5 3.5 0 1 1 7 0V19M4 13h7M18 9v6M21 12h-6" />
  </svg>
);
export default SvgTextIncrease;
