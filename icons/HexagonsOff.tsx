import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonsOff = ({
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
    className="icon icon-tabler icon-tabler-hexagons-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 18v-5l4-2 4 2v5l-4 2zM8 11V8m1.332-2.666L12 4l4 2v5M12 13l.661-.331M15.345 11.328 16 11l4 2v3m-1.334 2.667L16 20l-4-2M3 3l18 18" />
  </svg>
);
export default SvgHexagonsOff;
