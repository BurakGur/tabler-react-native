import * as React from "react";
import type { SVGProps } from "react";
const SvgSwords = ({
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
    className="icon icon-tabler icon-tabler-swords"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 3v5l-11 9-4 4-3-3 4-4 9-11zM5 13l6 6M14.32 17.32 18 21l3-3-3.365-3.365M10 5.5 8 3H3v5l3 2.5" />
  </svg>
);
export default SvgSwords;
