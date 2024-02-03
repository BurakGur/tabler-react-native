import * as React from "react";
import type { SVGProps } from "react";
const SvgVariablePlus = ({
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
    className="icon icon-tabler icon-tabler-variable-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 4C2.5 9 2.5 14 5 20M19 4c1.38 2.76 2 5.52 1.855 8.448M9 9h1c1 0 1 1 2.016 3.527.785 1.972.944 3.008 1.483 3.346" />
    <path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9M16 19h6M19 16v6" />
  </svg>
);
export default SvgVariablePlus;
