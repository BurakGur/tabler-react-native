import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayCard = ({
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
    className="icon icon-tabler icon-tabler-play-card"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 5v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M8 6h.01M16 18h.01" />
    <path d="m12 16-3-4 3-4 3 4z" />
  </svg>
);
export default SvgPlayCard;
