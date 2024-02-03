import * as React from "react";
import type { SVGProps } from "react";
const SvgCaravan = ({
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
    className="icon icon-tabler icon-tabler-caravan"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <path d="M11 18h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8.5A5.5 5.5 0 0 0 3 12.5V16a2 2 0 0 0 2 2h2M8 7l7-3 1 3" />
    <path d="M13 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zM20 16h2" />
  </svg>
);
export default SvgCaravan;
