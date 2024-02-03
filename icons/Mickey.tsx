import * as React from "react";
import type { SVGProps } from "react";
const SvgMickey = ({
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
    className="icon icon-tabler icon-tabler-mickey"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.5 3a3.5 3.5 0 0 1 3.25 4.8 7 7 0 0 0-2.424 2.1A3.5 3.5 0 1 1 5.5 3M18.5 3a3.5 3.5 0 1 1-.826 6.902 7 7 0 0 0-2.424-2.103A3.5 3.5 0 0 1 18.5 3" />
    <path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
  </svg>
);
export default SvgMickey;
