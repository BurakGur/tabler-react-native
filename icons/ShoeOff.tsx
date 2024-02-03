import * as React from "react";
import type { SVGProps } from "react";
const SvgShoeOff = ({
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
    className="icon icon-tabler icon-tabler-shoe-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m13.846 9.868 4.08.972A4 4 0 0 1 21 14.73V17m-3 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2" />
    <path d="M8 18v-1a4 4 0 0 0-4-4H3M10 12l.663-1.327M3 3l18 18" />
  </svg>
);
export default SvgShoeOff;
