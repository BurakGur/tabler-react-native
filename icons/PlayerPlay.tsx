import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayerPlay = ({
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
    className="icon icon-tabler icon-tabler-player-play"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 4v16l13-8z" />
  </svg>
);
export default SvgPlayerPlay;
