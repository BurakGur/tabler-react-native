import * as React from "react";
import type { SVGProps } from "react";
const SvgDualScreen = ({
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
    className="icon icon-tabler icon-tabler-dual-screen"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m5 4 8 3v15l-8-3z" />
    <path d="M13 19h6V4H5" />
  </svg>
);
export default SvgDualScreen;
