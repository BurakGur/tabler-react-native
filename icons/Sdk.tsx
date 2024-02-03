import * as React from "react";
import type { SVGProps } from "react";
const SvgSdk = ({
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
    className="icon icon-tabler icon-tabler-sdk"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 8H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3M17 8v8M21 8l-3 4 3 4M17 12h1M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" />
  </svg>
);
export default SvgSdk;
