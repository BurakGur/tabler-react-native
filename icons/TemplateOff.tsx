import * as React from "react";
import type { SVGProps } from "react";
const SvgTemplateOff = ({
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
    className="icon icon-tabler icon-tabler-template-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 4h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7M8 8H5a1 1 0 0 1-1-1V5c0-.271.108-.517.283-.697M4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM16 12h4M14 16h2M14 20h6M3 3l18 18" />
  </svg>
);
export default SvgTemplateOff;
