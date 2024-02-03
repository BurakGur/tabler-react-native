import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAlpineJs = ({
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
    className="icon icon-tabler icon-tabler-brand-alpine-js"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 11.5 7.5 16h9l-9-9z" />
    <path d="m16.5 16 4.5-4.5L16.5 7 12 11.5" />
  </svg>
);
export default SvgBrandAlpineJs;
