import * as React from "react";
import type { SVGProps } from "react";
const SvgPacman = ({
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
    className="icon icon-tabler icon-tabler-pacman"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.636 5.636a9 9 0 0 1 13.397.747L13.414 12l5.619 5.617A9 9 0 1 1 5.636 5.636" />
    <circle cx={11.5} cy={7.5} r={1} fill="currentColor" />
  </svg>
);
export default SvgPacman;
