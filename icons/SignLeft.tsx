import * as React from "react";
import type { SVGProps } from "react";
const SvgSignLeft = ({
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
    className="icon icon-tabler icon-tabler-sign-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 21h-4M14 21V11M14 6V3M18 6H8L6 8.5 8 11h10z" />
  </svg>
);
export default SvgSignLeft;
