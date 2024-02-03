import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFortnite = ({
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
    className="icon icon-tabler icon-tabler-brand-fortnite"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 3h7.5L15 7h-3v3h3v3.5h-3V20l-4 1z" />
  </svg>
);
export default SvgBrandFortnite;
