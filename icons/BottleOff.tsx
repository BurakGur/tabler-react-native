import * as React from "react";
import type { SVGProps } from "react";
const SvgBottleOff = ({
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
    className="icon icon-tabler icon-tabler-bottle-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 5h4V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1z" />
    <path d="M14 3.5c0 1.626.507 3.212 1.45 4.537l.05.07a8.1 8.1 0 0 1 1.5 4.694V13m0 4v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6.2a8.1 8.1 0 0 1 1.35-4.474m1.336-2.63A7.8 7.8 0 0 0 10 3.5" />
    <path d="M7 14.803A2.4 2.4 0 0 0 8 14a2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 .866-.142M3 3l18 18" />
  </svg>
);
export default SvgBottleOff;
