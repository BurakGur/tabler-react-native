import * as React from "react";
import type { SVGProps } from "react";
const SvgVariableMinus = ({
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
    className="icon icon-tabler icon-tabler-variable-minus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9" />
    <path d="M5 4C2.5 9 2.5 14 5 20M19 4c1.775 3.55 2.29 7.102 1.544 11.01M9 9h1c1 0 1 1 2.016 3.527.782 1.966.943 3 1.478 3.343" />
    <path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9M16 19h6" />
  </svg>
);
export default SvgVariableMinus;
