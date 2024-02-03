import * as React from "react";
import type { SVGProps } from "react";
const SvgColorSwatch = ({
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
    className="icon icon-tabler icon-tabler-color-swatch"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 3h-4a2 2 0 0 0-2 2v12a4 4 0 0 0 8 0V5a2 2 0 0 0-2-2" />
    <path d="m13 7.35-2-2a2 2 0 0 0-2.828 0L5.344 8.178a2 2 0 0 0 0 2.828l9 9" />
    <path d="M7.3 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12M17 17v.01" />
  </svg>
);
export default SvgColorSwatch;
