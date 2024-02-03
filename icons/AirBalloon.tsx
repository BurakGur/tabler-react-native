import * as React from "react";
import type { SVGProps } from "react";
const SvgAirBalloon = ({
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
    className="icon icon-tabler icon-tabler-air-balloon"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 20a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM12 16c3.314 0 6-4.686 6-8A6 6 0 1 0 6 8c0 3.314 2.686 8 6 8" />
    <path d="M10 9a2 7 0 1 0 4 0 2 7 0 1 0-4 0" />
  </svg>
);
export default SvgAirBalloon;
