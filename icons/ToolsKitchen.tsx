import * as React from "react";
import type { SVGProps } from "react";
const SvgToolsKitchen = ({
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
    className="icon icon-tabler icon-tabler-tools-kitchen"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 3h8l-1 9H5zM7 18h2v3H7zM20 3v12h-5c-.023-3.681.184-7.406 5-12M20 15v6h-1v-3M8 12v6" />
  </svg>
);
export default SvgToolsKitchen;
