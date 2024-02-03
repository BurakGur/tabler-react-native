import * as React from "react";
import type { SVGProps } from "react";
const SvgBleachChlorine = ({
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
    className="icon icon-tabler icon-tabler-bleach-chlorine"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.5 0l-7.1 12.25A2 2 0 0 0 4.89 19" />
    <path d="M11 12h-1a2 2 0 1 0 0 4h1M14 12v4h2" />
  </svg>
);
export default SvgBleachChlorine;
