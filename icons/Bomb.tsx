import * as React from "react";
import type { SVGProps } from "react";
const SvgBomb = ({
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
    className="icon icon-tabler icon-tabler-bomb"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15.349 5.349 18.65 8.65a1.2 1.2 0 0 1 0 1.698l-.972.972a7.5 7.5 0 1 1-5-5l.972-.972a1.2 1.2 0 0 1 1.698 0z" />
    <path d="m17 7 1.293-1.293A2.41 2.41 0 0 0 19 4a1 1 0 0 1 1-1h1M7 13a3 3 0 0 1 3-3" />
  </svg>
);
export default SvgBomb;
