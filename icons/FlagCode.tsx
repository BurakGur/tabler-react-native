import * as React from "react";
import type { SVGProps } from "react";
const SvgFlagCode = ({
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
    className="icon icon-tabler icon-tabler-flag-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.41 14.973A5 5 0 0 1 12 14a5 5 0 0 0-7 0V5a5 5 0 0 1 7 0 5 5 0 0 0 7 0v8M5 21v-7M20 21l2-2-2-2M17 17l-2 2 2 2" />
  </svg>
);
export default SvgFlagCode;
