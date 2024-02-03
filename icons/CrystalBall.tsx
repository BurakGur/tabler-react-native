import * as React from "react";
import type { SVGProps } from "react";
const SvgCrystalBall = ({
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
    className="icon icon-tabler icon-tabler-crystal-ball"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6.73 17.018a8 8 0 1 1 10.54 0" />
    <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0-4H7a2 2 0 0 0-2 2M11 7a3 3 0 0 0-3 3" />
  </svg>
);
export default SvgCrystalBall;
