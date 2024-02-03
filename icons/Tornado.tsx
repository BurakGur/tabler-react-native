import * as React from "react";
import type { SVGProps } from "react";
const SvgTornado = ({
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
    className="icon icon-tabler icon-tabler-tornado"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 4H3M13 16H7M11 20h4M6 8h14M4 12h12" />
  </svg>
);
export default SvgTornado;
