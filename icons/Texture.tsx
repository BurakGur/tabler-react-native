import * as React from "react";
import type { SVGProps } from "react";
const SvgTexture = ({
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
    className="icon icon-tabler icon-tabler-texture"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 3 3 6M21 18l-3 3M11 3l-8 8M16 3 3 16M21 3 3 21M21 8 8 21M21 13l-8 8" />
  </svg>
);
export default SvgTexture;
