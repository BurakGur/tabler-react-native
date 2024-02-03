import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderTrasvesti = ({
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
    className="icon icon-tabler icon-tabler-gender-trasvesti"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 20a5 5 0 1 1 0-10 5 5 0 0 1 0 10M6 6l5.4 5.4M4 8l4-4" />
  </svg>
);
export default SvgGenderTrasvesti;
