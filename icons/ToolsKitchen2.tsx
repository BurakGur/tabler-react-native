import * as React from "react";
import type { SVGProps } from "react";
const SvgToolsKitchen2 = ({
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
    className="icon icon-tabler icon-tabler-tools-kitchen-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 3v12h-5c-.023-3.681.184-7.406 5-12m0 12v6h-1v-3M8 4v17M5 4v3a3 3 0 1 0 6 0V4" />
  </svg>
);
export default SvgToolsKitchen2;
