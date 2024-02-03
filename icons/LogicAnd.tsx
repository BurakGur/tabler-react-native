import * as React from "react";
import type { SVGProps } from "react";
const SvgLogicAnd = ({
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
    className="icon icon-tabler icon-tabler-logic-and"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M22 12h-5M2 9h5M2 15h5M9 5c6 0 8 3.5 8 7s-2 7-8 7H7V5z" />
  </svg>
);
export default SvgLogicAnd;
