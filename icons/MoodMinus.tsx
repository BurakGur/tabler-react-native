import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodMinus = ({
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
    className="icon icon-tabler icon-tabler-mood-minus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.48 15.014a9 9 0 1 0-7.956 5.97M9 10h.01M15 10h.01M16 19h6" />
    <path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1" />
  </svg>
);
export default SvgMoodMinus;
