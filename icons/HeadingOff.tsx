import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadingOff = ({
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
    className="icon icon-tabler icon-tabler-heading-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 12h5m4 0h1M7 7v12M17 5v8m0 4v2M15 19h4M15 5h4M5 19h4M3 3l18 18" />
  </svg>
);
export default SvgHeadingOff;
