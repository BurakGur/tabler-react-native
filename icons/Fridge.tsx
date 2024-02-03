import * as React from "react";
import type { SVGProps } from "react";
const SvgFridge = ({
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
    className="icon icon-tabler icon-tabler-fridge"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM5 10h14M9 13v3M9 6v1" />
  </svg>
);
export default SvgFridge;
