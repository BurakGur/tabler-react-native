import * as React from "react";
import type { SVGProps } from "react";
const SvgMilitaryAward = ({
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
    className="icon icon-tabler icon-tabler-military-award"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <path d="M8.5 10.5 7.5 8H2l2.48 5.788A2 2 0 0 0 6.32 15H8.5M15.5 10.5l1-2.5H22l-2.48 5.788A2 2 0 0 1 17.68 15H15.5" />
  </svg>
);
export default SvgMilitaryAward;
