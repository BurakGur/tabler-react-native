import * as React from "react";
import type { SVGProps } from "react";
const SvgLogicNot = ({
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
    className="icon icon-tabler icon-tabler-logic-not"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M22 12h-3M2 9h3M2 15h3M5 5l10 7-10 7zM15 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </svg>
);
export default SvgLogicNot;
