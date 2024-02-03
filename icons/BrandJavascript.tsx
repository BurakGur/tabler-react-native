import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandJavascript = ({
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
    className="icon icon-tabler icon-tabler-brand-javascript"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m20 4-2 14.5-6 2-6-2L4 4z" />
    <path d="M7.5 8h3v8l-2-1M16.5 8H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5" />
  </svg>
);
export default SvgBrandJavascript;
