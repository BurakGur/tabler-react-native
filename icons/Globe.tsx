import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobe = ({
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
    className="icon icon-tabler icon-tabler-globe"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 9a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
    <path d="M5.75 15A8.015 8.015 0 1 0 15 2M11 17v4M7 21h8" />
  </svg>
);
export default SvgGlobe;
