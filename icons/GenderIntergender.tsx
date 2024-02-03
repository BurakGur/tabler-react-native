import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderIntergender = ({
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
    className="icon icon-tabler icon-tabler-gender-intergender"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.5 11.5 20 18v-4M11.5 13.5 18 20M9 4a5 5 0 1 1 0 10A5 5 0 0 1 9 4M14 20l2-2" />
  </svg>
);
export default SvgGenderIntergender;
