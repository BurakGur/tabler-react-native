import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeMove = ({
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
    className="icon icon-tabler icon-tabler-home-move"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
    <path d="M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5M16 19h6M19 16l3 3-3 3" />
  </svg>
);
export default SvgHomeMove;
