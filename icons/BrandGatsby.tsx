import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGatsby = ({
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
    className="icon icon-tabler icon-tabler-brand-gatsby"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3.296 14.297 6.407 6.407a9.02 9.02 0 0 1-6.325-6.116zM16 13h5c-.41 3.603-3.007 6.59-6.386 7.614L3.386 9.385A9 9 0 0 1 19.046 6.4" />
  </svg>
);
export default SvgBrandGatsby;
