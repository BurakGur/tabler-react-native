import * as React from "react";
import type { SVGProps } from "react";
const SvgLayersDifference = ({
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
    className="icon icon-tabler icon-tabler-layers-difference"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" />
    <path d="M10 8H8v2M8 14v2h2M14 8h2v2M16 14v2h-2" />
  </svg>
);
export default SvgLayersDifference;
