import * as React from "react";
import type { SVGProps } from "react";
const SvgCylinderPlus = ({
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
    className="icon icon-tabler icon-tabler-cylinder-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 6a7 3 0 1 0 14 0A7 3 0 1 0 5 6" />
    <path d="M5 6v12c0 1.657 3.134 3 7 3q.26 0 .515-.008M19 12V6M16 19h6M19 16v6" />
  </svg>
);
export default SvgCylinderPlus;
