import * as React from "react";
import type { SVGProps } from "react";
const SvgDice3 = ({
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
    className="icon icon-tabler icon-tabler-dice-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <circle cx={8.5} cy={8.5} r={0.5} fill="currentColor" />
    <circle cx={15.5} cy={15.5} r={0.5} fill="currentColor" />
    <circle cx={12} cy={12} r={0.5} fill="currentColor" />
  </svg>
);
export default SvgDice3;
