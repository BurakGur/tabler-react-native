import * as React from "react";
import type { SVGProps } from "react";
const SvgLadderOff = ({
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
    className="icon icon-tabler icon-tabler-ladder-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 3v1m0 4v13M16 3v9m0 4v5M8 14h6M8 10h2m4 0h2M10 6h6M8 18h8M3 3l18 18" />
  </svg>
);
export default SvgLadderOff;
