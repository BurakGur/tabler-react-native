import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpGet = ({
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
    className="icon icon-tabler icon-tabler-http-get"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4H6M14 8h-4v8h4M10 12h2.5M17 8h4M19 8v8" />
  </svg>
);
export default SvgHttpGet;
