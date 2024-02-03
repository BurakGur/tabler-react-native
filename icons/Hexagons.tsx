import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagons = ({
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
    className="icon icon-tabler icon-tabler-hexagons"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 18v-5l4-2 4 2v5l-4 2zM8 11V6l4-2 4 2v5M12 13l4-2 4 2v5l-4 2-4-2" />
  </svg>
);
export default SvgHexagons;
