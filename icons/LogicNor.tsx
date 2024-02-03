import * as React from "react";
import type { SVGProps } from "react";
const SvgLogicNor = ({
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
    className="icon icon-tabler icon-tabler-logic-nor"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M22 12h-4M2 9h5M2 15h5M6 5c10.667 2.1 10.667 12.6 0 14q2.709-7 0-14" />
    <path d="M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </svg>
);
export default SvgLogicNor;
