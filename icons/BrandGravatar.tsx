import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGravatar = ({
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
    className="icon icon-tabler icon-tabler-brand-gravatar"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.64 5.632A9 9 0 1 0 12 3v7.714" />
  </svg>
);
export default SvgBrandGravatar;
