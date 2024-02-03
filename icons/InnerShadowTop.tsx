import * as React from "react";
import type { SVGProps } from "react";
const SvgInnerShadowTop = ({
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
    className="icon icon-tabler icon-tabler-inner-shadow-top"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.636 5.636a9 9 0 1 0 12.728 12.728A9 9 0 0 0 5.636 5.636" />
    <path d="M16.243 7.757a6 6 0 0 0-8.486 0" />
  </svg>
);
export default SvgInnerShadowTop;
