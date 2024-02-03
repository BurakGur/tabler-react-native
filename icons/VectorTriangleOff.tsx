import * as React from "react";
import type { SVGProps } from "react";
const SvgVectorTriangleOff = ({
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
    className="icon icon-tabler icon-tabler-vector-triangle-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 6V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1M3 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM20.705 20.709A1 1 0 0 1 20 21h-2a1 1 0 0 1-1-1v-2c0-.28.115-.532.3-.714M6.5 17.1l3.749-6.823M13.158 9.197 12.5 8M7 19h10M3 3l18 18" />
  </svg>
);
export default SvgVectorTriangleOff;
