import * as React from "react";
import type { SVGProps } from "react";
const SvgTie = ({
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
    className="icon icon-tabler icon-tabler-tie"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 22 4-4-2.5-11 .993-2.649A1 1 0 0 0 13.557 3h-3.114a1 1 0 0 0-.936 1.351L10.5 7 8 18z" />
    <path d="M10.5 7h3l5 5.5" />
  </svg>
);
export default SvgTie;
