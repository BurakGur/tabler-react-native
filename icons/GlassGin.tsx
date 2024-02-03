import * as React from "react";
import type { SVGProps } from "react";
const SvgGlassGin = ({
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
    className="icon icon-tabler icon-tabler-glass-gin"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 21h8M12 15v6M5.5 5a6.5 2 0 1 0 13 0 6.5 2 0 1 0-13 0" />
    <path d="M5.75 4.5C5.138 5.25 5 6.5 5 8a7 7 0 0 0 14 0c0-1.5-.094-2.75-.75-3.5" />
  </svg>
);
export default SvgGlassGin;
