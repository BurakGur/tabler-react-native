import * as React from "react";
import type { SVGProps } from "react";
const SvgPaletteOff = ({
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
    className="icon icon-tabler icon-tabler-palette-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 15h-1a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21 9 9 0 0 1 5.628 5.644M8 4c1.236-.623 2.569-1 4-1 4.97 0 9 3.582 9 8 0 1.06-.474 2.078-1.318 2.828a4.5 4.5 0 0 1-1.127.73" />
    <path d="M7.5 10.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11.5 7.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M15.5 10.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" />
  </svg>
);
export default SvgPaletteOff;
